import React from 'react';

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    About Our Team
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the passion and expertise behind our React development team.
                </p>
            </header>

            <main className="grid gap-16 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                    <img
                        src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80"
                        alt="Edinburgh Arthur's Seat landscape"
                        className="w-full rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    />
                </div>

                <div className="space-y-8 text-center md:text-left order-1 md:order-2">
                    <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
                        React development is carried out by passionate developers
                    </h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p>
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </main>

            <section className="mt-24 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {['Frontend Development', 'Backend Integration', 'User Experience Design'].map((skill, index) => (
                        <div key={index} className="bg-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-orange-600 mb-2">{skill}</h3>
                            <p className="text-gray-600">
                                Our team excels in {skill.toLowerCase()}, ensuring top-notch quality in every project we undertake.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

