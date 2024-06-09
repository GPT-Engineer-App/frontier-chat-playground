import React from 'react';
import 'tailwindcss/tailwind.css';

const Index = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold">FRONTIER</div>
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
                <section className="w-full md:w-1/2 p-4 border-r border-gray-700">
                    <h2 className="text-2xl font-bold mb-4">Chat Interface</h2>
                    <div className="bg-gray-800 p-4 rounded-lg h-96 overflow-y-auto">
                        {/* Chat messages will go here */}
                        <div className="mb-4">
                            <div className="text-sm text-gray-400">10:00 AM - LLM 1</div>
                            <div className="bg-gray-700 p-2 rounded-lg">Hello, how can I assist you today?</div>
                        </div>
                        <div className="mb-4">
                            <div className="text-sm text-gray-400">10:01 AM - User</div>
                            <div className="bg-gray-700 p-2 rounded-lg">I need some information about your services.</div>
                        </div>
                    </div>
                    <div className="mt-4 flex">
                        <input type="text" className="flex-grow p-2 bg-gray-800 rounded-l-lg" placeholder="Type a message..." />
                        <button className="bg-blue-600 p-2 rounded-r-lg">Send</button>
                    </div>
                </section>

                {/* Comparison Panel */}
                <section className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Comparison Panel</h2>
                    <div className="bg-gray-800 p-4 rounded-lg h-96 overflow-y-auto">
                        {/* Comparison results will go here */}
                        <div className="mb-4">
                            <div className="text-sm text-gray-400">LLM 1</div>
                            <div className="bg-gray-700 p-2 rounded-lg">Response from LLM 1</div>
                        </div>
                        <div className="mb-4">
                            <div className="text-sm text-gray-400">LLM 2</div>
                            <div className="bg-gray-700 p-2 rounded-lg">Response from LLM 2</div>
                        </div>
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