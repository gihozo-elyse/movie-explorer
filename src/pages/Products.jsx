import React from 'react';
import ProductCard from '../components/ProductCard';

function Products() {
  
  // products organized by category for easy display
  const productsByCategory = {
    Electronics: [
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
        name: 'iphone',
        price: 1500000,
        category: 'Electronics',
        image: '/electronic2.jpg'
      }
    ],
    Fashion: [
      {
        id: 4,
        name: 'red dress',
        price: 129.99,
        category: 'Fashion',
        image: '/fashon%201.jpg'
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
        name: 'izora dress',
        price: 40000,
        category: 'Fashion',
        image: '/fashon3.jpg'
      }
    ],
    Accessories: [
      {
        id: 7,
        name: 'neckless',
        price: 89.99,
        category: 'Accessories',
        image: '/accessory1.jpg'
      },
      {
        id: 8,
        name: 'makeup tool',
        price: 15000,
        category: 'Accessories',
        image: '/accessory.jpg'
      },
      {
        id: 9,
        name: 'Phone Case',
        price: 19.99,
        category: 'Accessories',
        image: '/accessory1.jpg'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Our Products
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse through our carefully curated collection of premium products across different categories.
        </p>

        {/* loop */}
        {Object.entries(productsByCategory).map(([category, products]) => (
          <section key={category} className="mb-16">
            {/* category heading */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-6 border-b-4 border-yellow-500 inline-block pb-2">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {products.map(product => (
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
        ))}
      </div>
    </div>
  );
}

export default Products;
