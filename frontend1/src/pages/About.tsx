import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Target, Lightbulb, TrendingUp, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.value-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const companyValues = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every product and service we deliver.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Teamwork',
      description: 'Collaboration and teamwork drive our innovation and success.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Precision',
      description: 'Attention to detail and precision in all our engineering solutions.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Continuous innovation to meet evolving technology demands.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth',
      description: 'Sustainable growth while maintaining our core values and quality.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'Making a positive impact on communities worldwide through technology.',
    },
  ];

  const timeline = [
    { year: '2009', title: 'Company Founded', description: 'ElectroTech was established with a vision to revolutionize electrical components.' },
    { year: '2012', title: 'First Major Contract', description: 'Secured our first major industrial contract, marking significant growth.' },
    { year: '2015', title: 'International Expansion', description: 'Expanded operations to serve customers across multiple countries.' },
    { year: '2018', title: 'Innovation Center', description: 'Opened our state-of-the-art research and development facility.' },
    { year: '2021', title: 'Sustainability Initiative', description: 'Launched comprehensive sustainability and green technology programs.' },
    { year: '2025', title: 'Industry Leadership', description: 'Recognized as a leading provider of innovative electrical solutions.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">ElectroTech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we've been at the forefront of electrical innovation, delivering cutting-edge solutions that power the future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2017 in Delhi, Switch Mart India has quickly carved a niche in the distribution of high-quality active and
                passive electronic components for industrial supply. Known for our unmatched Value-Added Distribution Services,
                we are more than just a distributor — we are a trusted partner to businesses across India.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Switch Mart India, we specialize in the distribution and marketing of electronic components used in a wide range of applications, including:

                <p> Industrial Automation </p>

                <p>Medical Equipment </p>

                <p>Power Electronics </p>

                <p>Communication Systems</p>

                <p>Solar Energy Solutions, and more.</p>
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg"
                alt="Electronics Manufacturing"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our company's growth and success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`timeline-item relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving ElectroTech's innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
              { name: 'Sarah Johnson', role: 'CTO', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' },
              { name: 'Michael Chen', role: 'Head of Engineering', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of our journey to create innovative electrical solutions that power the future.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Explore Careers
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;