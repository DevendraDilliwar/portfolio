import { useState } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Optional: Add validation or API call here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Logo Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 transform rotate-45 rounded-sm"></div>
              <div className="absolute inset-2 bg-gray-950 transform rotate-45 rounded-sm flex items-center justify-center">
                <span className="text-violet-400 font-bold text-xs sm:text-sm">D</span>
              </div>
            </div>
            <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Devendra</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-1">Email Us</h3>
              <p className="text-gray-300">abc@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Call Us Now</h3>
              <p className="text-gray-300">892316789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Location</h3>
              <p className="text-gray-300">601 Brickell Key Dr.suite</p>
              <p className="text-gray-300">700 Miami, FL 33131</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full md:w-1/2 p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-1/2 p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white py-3 px-10 rounded-full text-lg font-semibold transition duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4">
          {/* Footer Nav */}
          <div className="flex justify-center border-b border-gray-700 py-4">
            <div className="flex flex-wrap justify-center w-full max-w-4xl">
              {['Home', 'About Us', 'Gallery', 'Contact Us'].map((item, idx) => (
                <div key={item} className="flex items-center">
                  <a href="#" className="px-4 py-2 hover:text-gray-300 transition">{item}</a>
                  {idx < 3 && <div className="border-r border-gray-700 h-4 mx-2" />}
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <span className="text-lg font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition">
                <Youtube size={18} />
              </a>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Company’s Name — All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
