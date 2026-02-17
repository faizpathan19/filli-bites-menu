
import React from 'react';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader subtitle="Reach Us" title="Visit Our Flavor Town" />
            <p className="text-gray-500 mb-10 leading-relaxed">
              Have questions or want to host an event? Get in touch with us or drop by during our opening hours. We're always happy to see you!
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#fdfaf7] rounded-full flex items-center justify-center text-[#c49b63] shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3d2b1f] mb-1">Our Location</h4>
                  <p className="text-gray-500">123 Spice Street, Flavor Town, India</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#fdfaf7] rounded-full flex items-center justify-center text-[#c49b63] shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3d2b1f] mb-1">Working Hours</h4>
                  <p className="text-gray-500">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#fdfaf7] rounded-full flex items-center justify-center text-[#c49b63] shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3d2b1f] mb-1">Call Us</h4>
                  <p className="text-gray-500">+91 000 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#3d2b1f] p-10 rounded-[3rem] shadow-2xl text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">Drop a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#4d3a2d] border-none rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-[#c49b63] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#4d3a2d] border-none rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-[#c49b63] transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#4d3a2d] border-none rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-[#c49b63] transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-[#c49b63] hover:bg-[#b08b58] text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
