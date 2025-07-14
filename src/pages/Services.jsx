import React from 'react';
import { Check, ArrowRight, Star, MessageSquare, Users, Mic, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Brand Story Consulting',
      description: 'Transform your brand narrative from forgettable to unforgettable',
      price: 'Starting at $2,500',
      features: [
        'Deep-dive brand story audit',
        'Core message development',
        'Audience persona refinement',
        'Messaging framework creation',
        'Content strategy blueprint',
        '90-day implementation roadmap'
      ],
      popular: true
    },
    {
      icon: Target,
      title: 'Marketing Strategy',
      description: 'Strategic marketing that connects authentically with your audience',
      price: 'Starting at $3,500',
      features: [
        'Comprehensive market analysis',
        'Multi-channel strategy development',
        'Content calendar planning',
        'Campaign messaging alignment',
        'Performance metrics setup',
        'Monthly strategy refinement'
      ]
    },
    {
      icon: Users,
      title: 'Brand Workshops',
      description: 'Interactive sessions to unlock your team\'s storytelling potential',
      price: 'Starting at $1,500',
      features: [
        'Half or full-day workshops',
        'Team alignment exercises',
        'Story discovery sessions',
        'Messaging consistency training',
        'Take-home resource kit',
        'Follow-up implementation support'
      ]
    },
    {
      icon: Mic,
      title: 'Speaking Engagements',
      description: 'Inspiring talks on resilience, authenticity, and brand storytelling',
      price: 'Contact for pricing',
      features: [
        'Keynote presentations',
        'Panel discussions',
        'Workshop facilitation',
        'Custom content development',
        'Interactive audience engagement',
        'Post-event resources'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Transform <span className="text-gold-600">Silent</span> Brands into{' '}
            <span className="text-gold-600">Unforgettable</span> Ones
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're just finding your voice or ready to amplify it, I'll help you craft a brand story 
            that connects, converts, and creates lasting impact.
          </p>
          <div className="bg-gold-100 border-l-4 border-gold-500 p-6 rounded-r-lg max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-800 font-medium">
              "Your story is your strategy. Let's make it unforgettable."
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  service.popular ? 'border-gold-200 bg-gradient-to-br from-gold-50 to-white' : 'border-gray-100'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={14} className="mr-1" fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    service.popular ? 'bg-gold-500' : 'bg-earth-500'
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gold-600 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    service.popular
                      ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every transformational journey starts with understanding where you are and envisioning where you want to be.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your brand\'s core - values, mission, and the story that makes you unique.',
                icon: Lightbulb
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'I craft a comprehensive narrative strategy that aligns with your business goals and resonates with your audience.',
                icon: Target
              },
              {
                step: '03',
                title: 'Creation',
                description: 'Together, we develop compelling content and messaging that brings your authentic story to life.',
                icon: MessageSquare
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We implement your new brand story across all touchpoints and measure its impact on your business.',
                icon: Star
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-earth-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            "Working with Sharon didn't just change our messaging - it transformed how we see ourselves as a brand. 
            She helped us find our authentic voice and gave us the confidence to use it."
          </blockquote>
          <cite className="text-gold-100 text-lg font-medium">- Sarah M., Tech Startup Founder</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Brand Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's start with a conversation about your vision, your challenges, and how we can create something unforgettable together.
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

export default Services;