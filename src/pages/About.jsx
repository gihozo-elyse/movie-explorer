import React from 'react';

function About() {
  
  
  const features = [
    {
      title: 'Quality Products',
      description: 'We carefully select and verify every product to ensure the highest quality standards.',
      icon: '✓'
    },
    {
      title: 'Fast Shipping',
      description: 'Get your orders delivered quickly with our reliable shipping partners worldwide.',
      icon: '🚚'
    },
    {
      title: 'Secure Payment',
      description: 'Shop with confidence using our secure payment gateway and data protection.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated customer support team is always ready to help you anytime.',
      icon: '💬'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Inzora ShopHub
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Welcome to <strong>Inzora ShopHub</strong>, your number one source for all things shopping. 
              We're dedicated to providing you the very best of products, with an emphasis on quality, 
              customer service, and uniqueness.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2022, ShopHub has come a long way from its beginnings. When we first started out, 
              our passion for providing the best shopping experience drove us to start our own business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We now serve customers in all provence of Rwanda and are thrilled to be a part of the fair trade wing 
              of the e-commerce industry. We hope you enjoy our products as much as we enjoy offering them to you.
            </p>
          </div>
        </section>

        
        <section className="mb-16 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-lg shadow-2xl p-8 border border-yellow-500/30">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            To provide high-quality products at competitive prices while delivering exceptional 
            customer service and creating a seamless shopping experience for everyone.
          </p>
        </section>

        
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
