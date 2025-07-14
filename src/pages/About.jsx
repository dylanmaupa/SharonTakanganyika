import React from 'react';
import { Heart, ArrowRight, Star, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  The Journey from <span className="text-gold-600">Silence</span> to <span className="text-gold-600">Strength</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  My story isn't just about overcoming - it's about transforming pain into purpose, 
                  silence into strength, and struggle into the superpower that helps brands find their voice.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sharon's journey of resilience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gold-100 border-l-4 border-gold-500 p-8 rounded-r-lg mb-12">
              <p className="text-xl italic text-gray-800 font-medium mb-0">
                "For 16 years, postnatal depression and amnesia stole my voice. But in fighting to reclaim it, 
                I discovered something powerful: every brand has a story that's been silenced too."
              </p>
            </div>

            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Darkness Before the Dawn</h2>
                <p className="text-lg leading-relaxed">
                  Sixteen years. That's how long I lived in a fog - battling postnatal depression and amnesia that 
                  left me feeling like a stranger in my own life. I lost pieces of myself I thought I'd never get back. 
                  My voice. My confidence. My sense of who I was meant to be.
                </p>
                <p className="text-lg leading-relaxed">
                  But sometimes our greatest wounds become our greatest wisdom. In learning to piece my story back together, 
                  I discovered something profound about the power of authentic storytelling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Turning Point</h2>
                <p className="text-lg leading-relaxed">
                  Recovery wasn't a destination - it was a daily choice to show up, speak up, and own my story. 
                  As I rebuilt my life word by word, I realized that every brand struggles with the same challenge: 
                  finding the courage to be authentically, unapologetically themselves.
                </p>
                <p className="text-lg leading-relaxed">
                  That's when my purpose became crystal clear. I wasn't just healing from my past - 
                  I was being equipped for my future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What I Believe About Stories & Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey taught me that the stories we're afraid to tell are often the ones the world most needs to hear.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vulnerability is Strength</h3>
              <p className="text-gray-600">
                Your struggles aren't weaknesses to hide - they're strengths that set you apart. 
                When you own your story, you give others permission to connect with the real you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity Attracts</h3>
              <p className="text-gray-600">
                The brands that matter most aren't perfect - they're real. When you show up authentically, 
                you attract the right people for all the right reasons.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Purpose Drives Profit</h3>
              <p className="text-gray-600">
                When your brand story is rooted in genuine purpose, profit follows naturally. 
                People don't just buy what you do - they buy why you do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            My Mission is Simple
          </h2>
          <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
            "To help every brand I work with move from silent to unforgettable - because I know what it means 
            to fight for your voice, and I know the power that comes when you finally find it."
          </blockquote>
          <p className="text-gold-100 text-lg">
            If you're ready to stop hiding and start shining, I'm here to guide you home to your authentic voice.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Own Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's uncover the story that's been waiting to be told and turn it into your competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;