import React, { useState } from 'react';

function Contact() {
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    alert(`Thank you ${formData.name}! Your message has been received. We'll get back to you at ${formData.email} soon.`);
    
   
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-900 text-black rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">support@inzorashophub.com</p>
                  <p className="text-gray-600">sales@inzorashophub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(+250) 78234567</p>
                  <p className="text-gray-600">(+250) 7876543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                
                  <p className="text-gray-600">Nyamirambo</p>
                  <p className="text-gray-600">kigali Rwanda</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-lg p-6 mt-8 border border-yellow-500/30">
                <h3 className="font-semibold text-yellow-500 mb-2">Business Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="elyse gihozo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="elyse@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-gray-900 hover:from-yellow-600 hover:to-yellow-500 text-white hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
