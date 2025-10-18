import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

function Home() {
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 20000,
      category: 'Electronics',
      image: '/electronic.jpg'
    },
    {
      id: 2,
      name: 'laptop',
      price: 1000000,
      category: 'Electronics',
      image: '/electronic1.jpg'
    },
    {
      id: 3,
      name: 'red dress',
      price: 129.99,
      category: 'Fashion',
      image: '/fashon%201.jpg'
    },
    {
      id: 4,
      name: 'neckless',
      price: 10000,
      category: 'Accessories',
      image: '/accessory1.jpg'
    },
    {
      id: 5,
      name: 'men shirt',
      price: 20000,
      category: 'Fashion',
      image: '/fashon2.jpg'
    },
    {
      id: 6,
      name: 'iphone16',
      price: 1500000,
      category: 'Electronics',
      image: '/electronic2.jpg'
    },
    {
      id: 7,
      name: 'inzora dress',
      price: 40000,
      category: 'Fashion',
      image: '/fashon3.jpg'
    },
    {
      id: 8,
      name: 'make up tool',
      price: 15000,
      category: 'Accessories',
      image: '/accessory.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <HeroSection />
        
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
