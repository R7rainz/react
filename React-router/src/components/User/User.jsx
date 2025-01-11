import React from 'react';
import { useParams } from 'react-router-dom';
import { UserIcon } from 'lucide-react';

export default function User() {
    const { userid } = useParams();

    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    User Profile
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Viewing details for user ID: {userid}
                </p>
            </header>

            <main className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-orange-100 rounded-full p-3">
                            <UserIcon className="h-16 w-16 text-orange-600" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">User ID: {userid}</h2>
                        <p className="text-gray-600 mb-4">Welcome to your profile page!</p>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">user{userid}@example.com</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900">+1 (555) 123-4567</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                                <dd className="mt-1 text-sm text-gray-900">January 1, 2023</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Last Login</dt>
                                <dd className="mt-1 text-sm text-gray-900">2 hours ago</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                        <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                            Edit Profile
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

