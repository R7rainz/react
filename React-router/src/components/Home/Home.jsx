import { Download, Rocket } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl text-orange-600 mt-2">
                Experience the Future
              </span>
            </h2>

            <p className="hidden sm:block text-gray-600">
              Transform your workflow with our cutting-edge solution.
              Join thousands of satisfied users today.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row sm:justify-end">
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
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img 
            className="w-96 transform hover:scale-105 transition-transform duration-300"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Modern workspace with laptop"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img 
          className="sm:w-96 w-48 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          alt="Business analytics"
        />
      </div>

      <div className="text-center py-16">
        <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          Transform Your Digital Experience
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
          Empower your journey with cutting-edge tools and seamless integration.
          Join thousands of satisfied users who have already transformed their workflow.
        </p>
      </div>
    </div>
  );
}