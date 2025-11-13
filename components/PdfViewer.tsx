
import React, { useState, useRef, useEffect } from 'react';
import { Note, Department, ChatMessage } from '../types';
import { getAiResponse } from '../services/geminiService';
import { SendIcon } from './icons/Icons';

interface PdfViewerProps {
  note: Note;
  department: Department;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ note, department }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    // FIX: Capture user input before it's cleared.
    const userQuestion = userInput;
    const newUserMessage: ChatMessage = { sender: 'user', text: userQuestion };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // FIX: Pass the captured user input to the AI service.
      const aiResponse = await getAiResponse(note.pdfContent, userQuestion);
      const newAiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
      // FIX: Correctly append only the new AI message to the chat history.
      setMessages(prev => [...prev, newAiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: 'Sorry, something went wrong.' };
      // FIX: Correctly append only the new error message to the chat history.
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="animate-fade-in flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
      {/* PDF Content Section */}
      <div className="lg:w-1/2 flex flex-col bg-white rounded-xl shadow-lg">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">{note.title}</h2>
          <p className="text-sm text-slate-500">{department.name}</p>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Document Content:</h3>
          <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{note.pdfContent}</p>
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="lg:w-1/2 flex flex-col bg-white rounded-xl shadow-lg">
        <div className="p-4 border-b border-slate-200 text-center">
          <h2 className="text-xl font-bold text-slate-800">AI Assistant</h2>
          <p className="text-sm text-slate-500">Ask questions about the document</p>
        </div>
        
        <div className="flex-grow p-4 overflow-y-auto bg-slate-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-slate-200 text-slate-800 px-4 py-2 rounded-2xl">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your question..."
              className="w-full px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
