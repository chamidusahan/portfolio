import React, { useState } from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, SendIcon } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm always open to discussing new projects, opportunities, or just having a chat about technology and development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MailIcon size={20} className="text-blue-600 mr-4" />
                <p className="text-slate-700 dark:text-slate-300 transition-colors">
                  chamidusahan0000@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <GithubIcon size={20} className="text-blue-600 mr-4" />
                <a href="https://github.com/chamidusahan" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  github.com/chamidu
                </a>
              </div>
              <div className="flex items-center">
                <LinkedinIcon size={20} className="text-blue-600 mr-4" />
                <a href="https://www.linkedin.com/in/chamidu-sahan-b115792b5/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  linkedin.com/in/chamidu
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-center">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <span>Send Message</span>
                  <SendIcon size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;