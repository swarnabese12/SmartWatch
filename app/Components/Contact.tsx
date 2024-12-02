import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <h2 className="text-2xl font-bold text-green">Contact Us</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-active btn-accent bg-green px-4 py-2 rounded transition"
          >
            Send Message
          </button>
          {/* <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
          >
            Send Message
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
