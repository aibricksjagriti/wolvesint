"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 lg:px-20 py-28 mt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side Image + Info */}
        <div className="space-y-10">
          <div className="overflow-hidden shadow-lg">
            <img
              src="/home/dubai.webp"
              alt="Modern Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              We’d Love to Hear From You.
            </h2>
            <p className="text-gray-600">
              Or just reach out manually to{" "}
              <a
                href="mailto:hello@aibricksrealtors.com"
                className="text-indigo-600 font-medium"
              >
                hello@aibricksrealtors.com
              </a>
              .
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-1">Email Support</h4>
                <p className="text-sm text-gray-600">
                  Our team can respond in real time.
                </p>
                <a
                  href="mailto:hello@aibricksrealtors.com"
                  className="text-indigo-600 text-sm"
                >
                  hello@aibricksrealtors.com
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Visit Our Office</h4>
                <p className="text-sm text-gray-600">
                  Visit our location in real life.
                </p>
                <p className="text-sm">22th Elementary Avenue, NY</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Call Us Directly</h4>
                <p className="text-sm text-gray-600">Available during hours.</p>
                <p className="text-sm">(+1) 234 - 4567 - 789</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-3xl shadow-md p-8 space-y-5"
        >
          <h3 className="text-4xl font-semibold mb-4">Let’s Get In Touch.</h3>
          <p className="text-md text-gray-600 mb-6">
            Or just reach out manually to{" "}
            <a
              href="mailto:info@aibricksrealtors.com"
              className="text-indigo-600 font-medium"
            >
              info@aibricksrealtors.com
            </a>
            .
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="+44 (000) 000-0000"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Enter your main text here..."
            rows="4"
            maxLength="300"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-[var(--color-brickred)] text-white font-medium py-3 rounded-xl hover:bg-[var(--color-ochre)] transition-all duration-300"
          >
            Submit Form →
          </button>
        </form>
      </div>
    </section>
  );
}
