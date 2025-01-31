import { Link } from "react-router-dom"
import React from "react"

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <aside className="relative overflow-hidden text-white rounded-lg my-8 sm:my-16">
        <div className="relative z-10 max-w-screen-xl px-4 py-16 sm:py-24 mx-auto">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl text-indigo-300">Lorem Ipsum</span>
            </h2>

            <Link
              className="inline-flex items-center px-6 py-3 font-medium bg-white text-purple-700 rounded-lg transition-colors duration-300 ease-in-out hover:bg-purple-700 hover:text-white"
              to="/"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90"></div>

        <div className="absolute left-0 w-full sm:w-2/3 h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Remote work illustration"
          />
        </div>
      </aside>

      <div className="flex justify-center items-center my-16">
        <img className="w-full max-w-md" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="Collaboration illustration" />
      </div>

      <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Lorem Ipsum Yojo
      </h1>
    </div>
  )
}

