import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("727Ha6mati5KOOxwC"); // Initialize with your EmailJS user ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(
      'service_blua7db', // EmailJS service ID
      'template_3exl05i', // EmailJS template ID
      formData,
      '727Ha6mati5KOOxwC' // EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 rounded-xl shadow-2xl bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-700">
      <h1 className="text-3xl font-light text-center mb-8 text-white tracking-wide">
        Contact Me
      </h1>
      
      {submitStatus === 'success' && (
        <div className="p-4 mb-6 text-center text-white bg-green-900 bg-opacity-30 border border-green-500 rounded-lg">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 mb-6 text-center bg-red-900 bg-opacity-30 border border-red-500 rounded-lg">
          Failed to send message. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-y min-h-[120px]"
            placeholder="Your message here..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-200 ${
            isSubmitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;