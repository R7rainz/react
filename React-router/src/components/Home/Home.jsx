import { Download, Rocket } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Transform Your Digital Experience
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empower your journey with cutting-edge tools and seamless integration.
          Join thousands of satisfied users who have already transformed their workflow.
        </p>
      </header>

      <main className="grid gap-16 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <img 
            className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Modern workspace with laptop"
          />
        </div>

        <div className="space-y-8 text-center md:text-left order-1 md:order-2">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Download Now
            <span className="block text-3xl text-orange-600 mt-2">
              Experience the Future
            </span>
          </h2>

          <p className="text-gray-600">
            Transform your workflow with our cutting-edge solution.
            Join thousands of satisfied users today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              to="/"
            >
              <Download className="w-5 h-5 mr-2" />
              Download now
            </Link>
            <Link
              className="inline-flex items-center px-6 py-3 font-medium text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors duration-200"
              to="/"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Learn more
            </Link>
          </div>
        </div>
      </main>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Powerful Analytics</h2>
        <img 
          className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          alt="Business analytics"
        />
      </section>
    </div>
  );
}

