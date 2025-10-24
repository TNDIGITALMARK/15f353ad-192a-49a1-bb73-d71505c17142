"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Send, FileText, X, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UploadedFile {
  name: string;
  content: string;
  type: string;
  size: number;
}

export default function ChatAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '> AI CHAT INITIALIZED\n> FILE UPLOAD SYSTEM READY\n> AWAITING INPUT...',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: UploadedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Only accept .txt and .json files
      if (!file.name.endsWith('.txt') && !file.name.endsWith('.json')) {
        alert(`File "${file.name}" is not supported. Only .txt and .json files are allowed.`);
        continue;
      }

      const reader = new FileReader();

      await new Promise<void>((resolve) => {
        reader.onload = (event) => {
          const content = event.target?.result as string;
          newFiles.push({
            name: file.name,
            content: content,
            type: file.type,
            size: file.size,
          });
          resolve();
        };
        reader.readAsText(file);
      });
    }

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Add system message about file upload
    if (newFiles.length > 0) {
      const fileNames = newFiles.map(f => f.name).join(', ');
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: `> FILE(S) UPLOADED: ${fileNames}\n> TOTAL FILES: ${uploadedFiles.length + newFiles.length}\n> AI ASSISTANT CAN NOW ACCESS THIS DATA`,
          timestamp: new Date(),
        },
      ]);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== fileName));
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: `> FILE REMOVED: ${fileName}\n> TOTAL FILES: ${uploadedFiles.length - 1}`,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call AI API with message and file context
      const response = await fetch('/api/chat-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          files: uploadedFiles,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '> ERROR: Failed to process request\n> Please try again or check your connection',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar Navigation */}
      <aside className="w-48 bg-black border-r border-[#00FF41] flex flex-col p-6">
        <div className="mb-8">
          <h1 className="text-[#00FF41] text-xl font-bold tracking-wider cyber-glow">
            AAAYAFUJ OS
          </h1>
        </div>

        <nav className="flex-1 space-y-1">
          <h3 className="text-[#00FF41] text-xs font-bold mb-3 tracking-wider opacity-70">
            CONTENT+HY
          </h3>

          <Link
            href="/"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Dashboard
          </Link>

          <Link
            href="/ai-brain"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; AI Brain
          </Link>

          <Link
            href="/chat-ai"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all border-l-2 border-[#00FF41] cyber-glow"
          >
            &gt; Chat AI
          </Link>

          <Link
            href="/network-tools"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Network Tools
          </Link>

          <Link
            href="/settings"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#00FF41] mb-2 cyber-glow-strong">
            CHAT AI - FILE-ENHANCED ASSISTANT
          </h2>
          <p className="text-[#00FF41] text-sm opacity-80">
            Upload .txt and .json files for the AI to analyze and reference
          </p>
        </div>

        {/* File Upload Section */}
        <div className="terminal-window rounded p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#00FF41] font-bold tracking-wider text-sm">
              &gt; UPLOADED FILES ({uploadedFiles.length})
            </h3>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="cyber-button text-xs py-1 px-3 flex items-center gap-2"
            >
              <Upload className="w-3 h-3" />
              UPLOAD FILE
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".txt,.json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {uploadedFiles.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#00FF4110] border border-[#00FF41] rounded px-3 py-2"
                >
                  <FileText className="w-4 h-4 text-[#00FF41]" />
                  <span className="text-[#00FF41] text-xs">{file.name}</span>
                  <span className="text-[#00FF41] text-xs opacity-50">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                  <button
                    onClick={() => removeFile(file.name)}
                    className="text-[#00FF41] hover:text-red-500 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 border-2 border-dashed border-[#00FF41] rounded opacity-50">
              <Upload className="w-8 h-8 text-[#00FF41] mx-auto mb-2" />
              <p className="text-[#00FF41] text-xs">
                No files uploaded. Click UPLOAD FILE to add .txt or .json files.
              </p>
            </div>
          )}
        </div>

        {/* Chat Messages Area */}
        <div className="terminal-window rounded p-6 flex-1 flex flex-col mb-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#00FF41] pulse-glow"></div>
            <h3 className="text-[#00FF41] font-bold tracking-wider">
              &gt; CONVERSATION
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded border ${
                  message.role === 'user'
                    ? 'bg-[#00FF4105] border-[#00FF41] ml-8'
                    : 'bg-black border-[#008F11] mr-8'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#00FF41] text-xs font-bold">
                    {message.role === 'user' ? '> USER' : '> AI_ASSISTANT'}
                  </span>
                  <span className="text-[#00FF41] text-xs opacity-50">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-[#00FF41] text-sm whitespace-pre-wrap font-mono">
                  {message.content}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="p-4 rounded border bg-black border-[#008F11] mr-8 flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-[#00FF41] animate-spin" />
                <span className="text-[#00FF41] text-sm">
                  AI is processing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 bg-black border border-[#00FF41] rounded px-4 py-3 text-[#00FF41] placeholder-[#00FF4150] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="cyber-button flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              SEND
            </button>
          </form>
        </div>

        {/* System Status */}
        <div className="terminal-window rounded p-4">
          <div className="flex items-center justify-between text-[#00FF41] text-xs">
            <span>
              <span className="font-bold">STATUS:</span> {isLoading ? 'Processing...' : 'Ready'}
            </span>
            <span>FILES: {uploadedFiles.length}</span>
            <span>MESSAGES: {messages.length}</span>
            <span className="cyber-glow">AI: ONLINE</span>
          </div>
        </div>
      </main>
    </div>
  );
}
