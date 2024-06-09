import React from 'react';
import 'tailwindcss/tailwind.css';

const Index = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">FRONTIER</div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">Playground</a>
                        <a href="#" className="hover:text-gray-400">About</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Main Playground Area */}
            <main className="container mx-auto mt-8 flex flex-col md:flex-row flex-grow">
                {/* Chat Interface */}
                <section className="md:w-1/2 p-4 bg-gray-800 rounded-lg mb-4 md:mb-0 md:mr-4">
                    <h2 className="text-xl font-semibold mb-4">Chat Interface</h2>
                    <div id="chat-messages" className="h-96 overflow-y-scroll p-2 bg-gray-700 rounded-lg">
                        {/* Chat messages will be dynamically inserted here */}
                    </div>
                    <div className="mt-4 flex">
                        <input type="text" id="chat-input" className="flex-grow p-2 bg-gray-600 rounded-l-lg" placeholder="Type a message..." />
                        <button id="send-button" className="p-2 bg-blue-600 rounded-r-lg">Send</button>
                    </div>
                </section>

                {/* Comparison Panel */}
                <section className="md:w-1/2 p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Comparison Panel</h2>
                    <div id="comparison-panel" className="h-96 overflow-y-scroll p-2 bg-gray-700 rounded-lg">
                        {/* Comparison results will be dynamically inserted here */}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 p-4 mt-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">LinkedIn</a>
                        <a href="#" className="hover:text-gray-400">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;