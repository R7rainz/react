export default function About() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Startup illustration"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              React development is carried out by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                passionate developers
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
              perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
            </p>
            <p className="text-lg text-gray-700">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus
              nesciunt dicta veniam aspernatur quam mollitia.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


