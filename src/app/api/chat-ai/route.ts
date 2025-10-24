import { NextRequest, NextResponse } from 'next/server';

interface UploadedFile {
  name: string;
  content: string;
  type: string;
  size: number;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface RequestBody {
  message: string;
  files: UploadedFile[];
  conversationHistory: Message[];
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { message, files, conversationHistory } = body;

    // Build context from uploaded files
    let fileContext = '';
    if (files && files.length > 0) {
      fileContext = '\n\n=== UPLOADED FILES CONTEXT ===\n';

      for (const file of files) {
        fileContext += `\n--- FILE: ${file.name} ---\n`;

        // Parse JSON files for better structure
        if (file.name.endsWith('.json')) {
          try {
            const jsonData = JSON.parse(file.content);
            fileContext += JSON.stringify(jsonData, null, 2);
          } catch (e) {
            fileContext += file.content;
          }
        } else {
          fileContext += file.content;
        }

        fileContext += '\n--- END FILE ---\n';
      }

      fileContext += '\n=== END FILES CONTEXT ===\n\n';
    }

    // Build conversation context
    let conversationContext = '';
    if (conversationHistory && conversationHistory.length > 0) {
      conversationContext = 'Previous conversation:\n';
      conversationHistory.slice(-5).forEach(msg => {
        conversationContext += `${msg.role.toUpperCase()}: ${msg.content}\n`;
      });
      conversationContext += '\n';
    }

    // Generate AI response
    // This is a simulated AI response. In production, you would integrate with
    // an actual AI service (OpenAI, Anthropic Claude, etc.)
    const aiResponse = generateAIResponse(message, fileContext, conversationContext);

    return NextResponse.json({
      response: aiResponse,
      success: true,
    });

  } catch (error) {
    console.error('Error in chat-ai API:', error);
    return NextResponse.json(
      {
        response: '> ERROR: Failed to process request\n> System error occurred',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

function generateAIResponse(userMessage: string, fileContext: string, conversationContext: string): string {
  // This is a simulated AI response generator
  // In a real implementation, you would call an AI API here

  const hasFiles = fileContext.length > 0;
  const lowerMessage = userMessage.toLowerCase();

  // Analyze user intent
  if (lowerMessage.includes('what') && lowerMessage.includes('file')) {
    if (hasFiles) {
      // Extract file names from context
      const fileNames: string[] = [];
      const fileMatches = fileContext.match(/--- FILE: (.+?) ---/g);
      if (fileMatches) {
        fileMatches.forEach(match => {
          const name = match.replace('--- FILE: ', '').replace(' ---', '');
          fileNames.push(name);
        });
      }
      return `> AI_ANALYSIS: File inventory complete\n\n` +
        `I can see ${fileNames.length} file(s) uploaded:\n${fileNames.map(f => `- ${f}`).join('\n')}\n\n` +
        `These files contain text data that I can analyze and reference. Ask me specific questions about their content.`;
    } else {
      return `> AI_RESPONSE: No files detected\n\n` +
        `You haven't uploaded any files yet. Use the UPLOAD FILE button to add .txt or .json files for me to analyze.`;
    }
  }

  if (lowerMessage.includes('summarize') || lowerMessage.includes('summary')) {
    if (hasFiles) {
      const contentLength = fileContext.length;
      const fileCount = (fileContext.match(/--- FILE:/g) || []).length;

      return `> AI_ANALYSIS: Content summary\n\n` +
        `Files analyzed: ${fileCount}\n` +
        `Total content size: ${(contentLength / 1024).toFixed(2)} KB\n\n` +
        `The uploaded files contain structured data. I can:\n` +
        `- Search for specific information\n` +
        `- Extract patterns and insights\n` +
        `- Answer questions about the content\n` +
        `- Compare data across files\n\n` +
        `What would you like to know?`;
    } else {
      return `> AI_RESPONSE: Cannot summarize - no files uploaded\n\n` +
        `Please upload .txt or .json files first.`;
    }
  }

  if (lowerMessage.includes('search') || lowerMessage.includes('find')) {
    if (hasFiles) {
      // Extract search terms (simple implementation)
      const terms = userMessage.toLowerCase().split(' ').filter(w =>
        w.length > 3 && !['search', 'find', 'file', 'files', 'what', 'where'].includes(w)
      );

      if (terms.length > 0) {
        const results: string[] = [];
        const lines = fileContext.split('\n');

        lines.forEach((line, index) => {
          terms.forEach(term => {
            if (line.toLowerCase().includes(term)) {
              results.push(line.trim());
            }
          });
        });

        if (results.length > 0) {
          const uniqueResults = [...new Set(results)].slice(0, 10);
          return `> AI_SEARCH: Found ${results.length} matches\n\n` +
            `Search results (showing first ${uniqueResults.length}):\n\n` +
            uniqueResults.map((r, i) => `${i + 1}. ${r}`).join('\n');
        } else {
          return `> AI_SEARCH: No matches found\n\n` +
            `The search term(s) "${terms.join(', ')}" were not found in the uploaded files.`;
        }
      }
    }

    return `> AI_RESPONSE: Search requires uploaded files\n\n` +
      `Upload files first, then ask me to search for specific content.`;
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('what can you')) {
    return `> AI_ASSISTANT: Capabilities overview\n\n` +
      `I am an AI assistant with file analysis capabilities. I can:\n\n` +
      `FILE OPERATIONS:\n` +
      `- Read and analyze .txt and .json files\n` +
      `- Search for specific content across all uploaded files\n` +
      `- Summarize file contents\n` +
      `- Extract data patterns\n\n` +
      `COMMANDS:\n` +
      `- "What files are uploaded?" - Show file inventory\n` +
      `- "Summarize the files" - Get content overview\n` +
      `- "Search for [term]" - Find specific content\n` +
      `- "Help" - Show this message\n\n` +
      `Upload files and ask me questions about their content!`;
  }

  // Default response with file awareness
  if (hasFiles) {
    const fileCount = (fileContext.match(/--- FILE:/g) || []).length;

    return `> AI_RESPONSE: Processing query\n\n` +
      `I understand you asked: "${userMessage}"\n\n` +
      `I have access to ${fileCount} file(s) with data. To provide better assistance:\n` +
      `- Ask specific questions about the file contents\n` +
      `- Request a summary or search\n` +
      `- Use "help" to see all my capabilities\n\n` +
      `How can I help you analyze this data?`;
  } else {
    return `> AI_RESPONSE: Message received\n\n` +
      `"${userMessage}"\n\n` +
      `I'm ready to assist! Upload .txt or .json files to enable file analysis features.\n` +
      `Type "help" to see what I can do.`;
  }
}
