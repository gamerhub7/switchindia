import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, DollarSign, Users, Award, Coffee, Wifi, Car } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Career: React.FC = () => {
  const jobsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.job-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: jobsRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.benefit-card',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const jobOpenings = [
    {
      title: 'Senior Electrical Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Lead the design and development of next-generation electrical circuits and systems.',
      requirements: ['MS in Electrical Engineering', '5+ years experience', 'PCB design expertise', 'Team leadership skills'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$110k - $140k',
      description: 'Drive product strategy and roadmap for our electrical component portfolio.',
      requirements: ['MBA or equivalent', 'Product management experience', 'Technical background', 'Agile methodology'],
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Quality',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$80k - $100k',
      description: 'Ensure product quality through comprehensive testing and validation processes.',
      requirements: ['BS in Engineering', 'QA experience', 'Testing protocols', 'Attention to detail'],
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Provide technical expertise and support to drive sales growth.',
      requirements: ['Engineering degree', 'Sales experience', 'Client relations', 'Technical presentation skills'],
    },
    {
      title: 'Software Developer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Develop software tools and applications for electrical design and simulation.',
      requirements: ['CS degree', 'Full-stack development', 'React/Node.js', 'Engineering software experience'],
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70k - $90k',
      description: 'Create and execute marketing strategies for our electrical products and solutions.',
      requirements: ['Marketing degree', 'Digital marketing', 'Content creation', 'B2B experience'],
    },
  ];

  const benefits = [
    { icon: <DollarSign className="h-8 w-8" />, title: 'Competitive Salary', description: 'Market-leading compensation packages' },
    { icon: <Award className="h-8 w-8" />, title: 'Health Benefits', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: <Coffee className="h-8 w-8" />, title: 'Flexible Schedule', description: 'Work-life balance with flexible hours' },
    { icon: <Car className="h-8 w-8" />, title: 'Transportation', description: 'Commuter benefits and parking allowance' },
    { icon: <Wifi className="h-8 w-8" />, title: 'Remote Work', description: 'Hybrid and remote work opportunities' },
    { icon: <Users className="h-8 w-8" />, title: 'Team Culture', description: 'Collaborative and inclusive work environment' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build your career with ElectroTech and help shape the future of electrical technology. We're looking for passionate individuals who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Learn About Culture
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment that helps you grow professionally and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section ref={jobsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest job opportunities and find the perfect role for your skills and interests.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <DollarSign className="h-4 w-4 mr-2" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:ml-6 flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 lg:mt-0">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                        Apply Now
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ElectroTech, we believe that great products come from great people. We've built a culture that encourages innovation, 
                collaboration, and continuous learning.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team is our greatest asset, and we're committed to providing an environment where everyone can thrive and make 
                meaningful contributions to advancing electrical technology.
              </p>
              <div className="space-y-4">
                {[
                  'Innovation-driven environment',
                  'Continuous learning opportunities',
                  'Diversity and inclusion focus',
                  'Work-life balance priority'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team Culture"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined hiring process is designed to be efficient and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application and resume through our portal' },
              { step: '2', title: 'Initial Review', description: 'Our HR team reviews your qualifications and experience' },
              { step: '3', title: 'Interview', description: 'Technical and cultural fit interviews with our team' },
              { step: '4', title: 'Decision', description: 'We make our decision and extend an offer to successful candidates' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Submit General Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;