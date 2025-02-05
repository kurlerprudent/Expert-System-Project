export default function Help() {
  return (
    <div>
      <header className="bg-gray-100 shadow-md py-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Help & Support</h1>
        <p className="text-gray-600 mt-2">
          Find answers to your questions and get assistance.
        </p>
      </header>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="font-bold text-lg cursor-pointer">
                🔍 What is this system used for?
              </summary>
              <p className="mt-2 text-gray-600">
                This expert system helps users select OTC medications based on
                their symptoms using AI-driven recommendations.
              </p>
            </details>

            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="font-bold text-lg cursor-pointer">
                🔍 Do I need an account to use the system?
              </summary>
              <p className="mt-2 text-gray-600">
                No, you can use the system without an account. However, creating
                an account allows you to save preferences and past
                recommendations.
              </p>
            </details>

            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="font-bold text-lg cursor-pointer">
                ⚙️ The system is not loading. What should I do?
              </summary>
              <p className="mt-2 text-gray-600">
                Try refreshing the page. If the issue persists, check your
                internet connection or try a different browser.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold">Need More Help?</h2>
        <p className="mt-2 text-lg">
          We're here to assist you. Reach out to us through any of the following
          methods:
        </p>

        <div className="mt-6 flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl">📧</span>
            <p className="mt-2">Email us at</p>
            <a href="mailto:support@medexpert.com" className="underline">
              support@medexpert.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">📞</span>
            <p className="mt-2">Call us at</p>
            <p className="font-semibold">+1-800-555-HELP</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">💬</span>
            <p className="mt-2">Live Chat</p>
            <a
              href="#"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
            >
              Start Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
