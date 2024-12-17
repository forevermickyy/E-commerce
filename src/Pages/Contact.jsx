import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center py-12 px-4 lg:px-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700">Contact Us</h1>
        <p className="mt-2 text-gray-500">
          We'd love to hear from you! Fill out the form below or reach us via our contact details.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 lg:w-2/3">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full mt-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6 lg:w-1/3 flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-bold text-gray-700">Our Address</h2>
            <p className="text-gray-500 mt-1">123 Omar St, Accra City</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-700">Call Us</h2>
            <p className="text-gray-500 mt-1">+1 (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-700">Email</h2>
            <p className="text-gray-500 mt-1">support@ecommerce.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
