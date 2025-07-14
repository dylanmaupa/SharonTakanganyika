import React, { useState } from 'react';
import { Send, MessageCircle, Linkedin, Instagram, Mail, Phone, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    serviceInterest: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your <span className="text-gold-600">Transformation</span> Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to move from silent to unforgettable? I'm here to guide you through every step of discovering 
            and sharing your brand's most powerful story.
          </p>
          <div className="bg-gold-100 border-l-4 border-gold-500 p-6 rounded-r-lg max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-800 font-medium">
              "Every great brand story starts with a single conversation. Let's have ours."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Discovery Call</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your company or brand"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="Brand Story Consulting">Brand Story Consulting</option>
                    <option value="Marketing Strategy">Marketing Strategy</option>
                    <option value="Brand Workshops">Brand Workshops</option>
                    <option value="Speaking Engagements">Speaking Engagements</option>
                    <option value="Not sure - let's discuss">Not sure - let's discuss</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your brand's story *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="What challenges are you facing with your brand story? What do you hope to achieve?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 mb-8">
                  I believe in the power of authentic connection. Whether you're ready to dive deep into your brand story 
                  or just want to explore what's possible, I'm here to listen and guide you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@sharontanganyika.com</p>
                    <p className="text-sm text-gray-500">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Quick questions welcome</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow My Journey</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/sharontanganyika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/sharontanganyika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gold-100 border-l-4 border-gold-500 p-6 rounded-r-lg">
                <p className="text-gray-800 italic mb-3">
                  "Sharon's approach isn't just professional - it's deeply personal. She helped us see our struggles 
                  as strengths and our story as our superpower."
                </p>
                <cite className="text-gold-600 font-medium">- Maria K., Wellness Brand Owner</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "How long does the brand story process typically take?",
                answer: "Most brand story projects take 4-8 weeks, depending on the scope. We'll work at a pace that allows for deep discovery while respecting your timeline needs."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! I work with everyone from solo entrepreneurs to established companies. What matters most is your commitment to authentic storytelling and willingness to be vulnerable in the process."
              },
              {
                question: "What makes your approach different?",
                answer: "Having rebuilt my own voice from silence, I understand the courage it takes to share your authentic story. I bring both strategic expertise and deep empathy to every project."
              },
              {
                question: "Can we start with a smaller project?",
                answer: "Absolutely! Brand workshops or strategy sessions are perfect ways to begin. We can always expand our work together as you see the value and results."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;