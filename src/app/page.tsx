import Image from "next/image";
import Link from "next/link";

function Header() {
  return <></>;
}

export default function Home() {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 fixed w-full top-0 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Pharmacy Medication Expert System
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
Help                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
                >
                  Start Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "#" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl font-bold">
            Your AI-Powered Pharmacy Assistant
          </h2>
          <p className="text-lg mt-4 max-w-xl">
            Find the right medication based on your symptoms with expert-level
            precision.
          </p>
          <Link
            href="#"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">🔍</span>
              <h3 className="font-bold mt-4">Start the Process</h3>
              <p className="text-gray-600">Enter your symptoms to begin.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">💬</span>
              <h3 className="font-bold mt-4">Answer Questions</h3>
              <p className="text-gray-600">
                Interact with our intelligent system.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">🧠</span>
              <h3 className="font-bold mt-4">AI Decision Tree</h3>
              <p className="text-gray-600">
                Our system refines the suggestions.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">💊</span>
              <h3 className="font-bold mt-4">Get Recommendations</h3>
              <p className="text-gray-600">Receive expert medication advice.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">🛠</span>
              <h3 className="font-bold mt-4">Interactive Symptom Selection</h3>
            </div>
            <div className="p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">💡</span>
              <h3 className="font-bold mt-4">AI-Driven Recommendations</h3>
            </div>
            <div className="p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">🌀</span>
              <h3 className="font-bold mt-4">Dynamic Decision Tree</h3>
            </div>
            <div className="p-6 shadow-lg rounded-lg text-center">
              <span className="text-blue-500 text-3xl">🎨</span>
              <h3 className="font-bold mt-4">User-Friendly Interface</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Technology Stack
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <Image
                src="data:image/png;base64,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"
                width={250}
                height={120}
                className="h-12 mx-auto"
                alt="Next.js"
              />
            </div>
            <div className="p-4">
              <Image
                src="data:image/png;base64,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"
                width={250}
                height={120}
                className="h-12 mx-auto"
                alt="Supabase"
              />
            </div>
            {/* <div className="p-4">
              <Image
                src="https://github.com/pmndrs/zustand/raw/main/docs/bear.jpg"
               width={250}
                height={120}
                className="h-12 mx-auto"
                alt="Zustand"
              />
            </div> */}
            <div className="p-4">
              <Image
                src="data:image/png;base64,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"
                width={150}
                height={80}
                className="h-12 mx-auto"
                alt="Tailwind CSS"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 text-white py-16 text-center">
  <h2 className="text-3xl font-bold">Ready to Find the Right Medication?</h2>
  <p className="mt-4">Start now and receive personalized recommendations instantly.</p>
  <Link href="#" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200">Start Symptom Selection</Link>
</section>

    </div>
  );
}
