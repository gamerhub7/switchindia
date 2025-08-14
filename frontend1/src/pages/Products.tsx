import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Zap, Settings, Shield, ArrowRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.product-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const productCategories = [
    {
      icon: <Cpu className="h-12 w-12" />,
      title: 'Circuit Boards',
      description: 'Advanced PCBs for various applications',
      products: [
        { name: 'Microcontroller Board Pro', price: '$89.99', rating: 4.8, image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg' },
        { name: 'Power Distribution PCB', price: '$124.99', rating: 4.9, image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg' },
        { name: 'Sensor Integration Board', price: '$67.50', rating: 4.7, image: 'https://images.pexels.com/photos/159320/circuit-board-technology-computer-hardware-159320.jpeg' },
      ],
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Power Components',
      description: 'Reliable power management solutions',
      products: [
        { name: 'High-Efficiency Transformer', price: '$199.99', rating: 4.9, image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg' },
        { name: 'Smart Power Switch', price: '$45.99', rating: 4.6, image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg' },
        { name: 'Voltage Regulator Module', price: '$78.99', rating: 4.8, image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg' },
      ],
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Control Systems',
      description: 'Intelligent automation and control',
      products: [
        { name: 'Industrial Controller Unit', price: '$299.99', rating: 4.9, image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg' },
        { name: 'Motor Control Driver', price: '$156.99', rating: 4.7, image: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg' },
        { name: 'Sensor Interface Module', price: '$89.50', rating: 4.8, image: 'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg' },
      ],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Protection Devices',
      description: 'Safety and protection components',
      products: [
        { name: 'Surge Protection Unit', price: '$134.99', rating: 4.8, image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg' },
        { name: 'Overload Relay', price: '$67.99', rating: 4.6, image: 'https://images.pexels.com/photos/442153/pexels-photo-442153.jpeg' },
        { name: 'Ground Fault Detector', price: '$95.50', rating: 4.7, image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Product Range</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of electrical circuits, components, and systems designed for modern applications.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center justify-center mb-12">
                <div className="text-blue-600 mr-4">{category.icon}</div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="product-card group">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden border border-gray-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
                          Add to Cart
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All our products come with industry-leading features and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'High-quality materials and components',
              'Rigorous testing and quality assurance',
              'Comprehensive warranty coverage',
              'Expert technical support',
              'Fast shipping and delivery',
              'Competitive pricing and bulk discounts'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom electrical components to meet your specific requirements.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Engineering Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;