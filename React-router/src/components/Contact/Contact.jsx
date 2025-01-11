import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Get in Touch
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We're here to help. Fill out the form below or use our contact information to start a conversation.
                </p>
            </header>

            <main className="grid gap-16 md:grid-cols-2">
                <div className="space-y-8">
                    <div className="bg-orange-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                                <span>Acme Inc, Street, State, Postal Code</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Phone className="w-6 h-6 text-orange-600 mr-3" />
                                <span>+44 1234567890</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail className="w-6 h-6 text-orange-600 mr-3" />
                                <span>info@acme.org</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                            <li>Saturday: 10:00 AM - 2:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="+1 (555) 123-4567"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition ease-in-out duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </main>
        </div>
    );
}

