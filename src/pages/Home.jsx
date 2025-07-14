import React from 'react';
import { ArrowRight, Star, Heart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold-50 to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  From <span className="text-gold-600">Silent</span> to{' '}
                  <span className="text-gold-600">Unforgettable</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  I help brands find their authentic voice and tell stories that connect, inspire, and convert.
                </p>
                <div className="bg-gold-100 border-l-4 border-gold-500 p-6 rounded-r-lg">
                  <p className="text-lg italic text-gray-800 font-medium">
                    "Because I know what it means to fight for your voice."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  My Story
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sharon Tanganyika - Brand Story Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gold-100">
                <div className="flex items-center space-x-2">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">Trusted by 100+ brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Brand Has a Story Worth Telling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After 16 years of silence, I rebuilt my voice from the ground up. Now I help brands do the same - 
              turning their deepest truths into their greatest strengths.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-white border border-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Connection</h3>
              <p className="text-gray-600">
                Transform your brand message from corporate speak to heart-to-heart conversation that builds genuine relationships.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-earth-50 to-white border border-earth-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Clarity</h3>
              <p className="text-gray-600">
                Cut through the noise with crystal-clear messaging that positions you as the obvious choice for your ideal clients.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-white border border-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Magnetic Presence</h3>
              <p className="text-gray-600">
                Develop an unforgettable brand presence that attracts your dream clients and converts them into loyal advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            "Your story is not your limitation - it's your liberation. When you own your journey, 
            you give others permission to own theirs."
          </blockquote>
          <cite className="text-gold-100 text-lg font-medium">- Sharon Tanganyika</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Move From Silent to Unforgettable?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's uncover your brand's most powerful story and turn it into your competitive advantage.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Your Discovery Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;