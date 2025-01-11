import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Users, LinkIcon } from 'lucide-react';

export default function Github() {
    const data = useLoaderData();

    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Github Profile
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Displaying information from the Github API for user R7rainz.
                </p>
            </header>

            <main className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-48 w-full object-cover md:w-48"
                            src={data.avatar_url}
                            alt="Github Avatar"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-orange-600 font-semibold">
                            {data.login}
                        </div>
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                            {data.name || data.login}
                        </a>
                        <p className="mt-2 text-gray-500">{data.bio}</p>
                        <div className="mt-4 flex items-center">
                            <Users className="h-5 w-5 text-gray-400" />
                            <span className="ml-2 text-gray-600">{data.followers} followers</span>
                        </div>
                        <div className="mt-2 flex items-center">
                            <LinkIcon className="h-5 w-5 text-gray-400" />
                            <a
                                href={data.blog}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-gray-600 hover:text-orange-600"
                            >
                                {data.blog || 'No blog provided'}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-orange-600 hover:text-orange-500"
                        >
                            View full profile on Github
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/R7rainz');
    return response.json();
};

