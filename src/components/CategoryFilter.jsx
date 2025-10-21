import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

function CategoryFilter({ 
  categories = [], 
  selectedCategory = '',
  onCategoryChange,
  className = '',
  maxVisible = 5 
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleCategoryClick = useCallback((category) => {
    const newCategory = category === selectedCategory ? '' : category;
    
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    } else {
      const params = new URLSearchParams(searchParams);
      if (newCategory) {
        params.set('category', newCategory);
      } else {
        params.delete('category');
      }
      setSearchParams(params);
    }
  }, [selectedCategory, onCategoryChange, searchParams, setSearchParams]);

  const visibleCategories = maxVisible ? categories.slice(0, maxVisible) : categories;
  const hasMore = maxVisible && categories.length > maxVisible;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={() => handleCategoryClick('')}
        className={`
          px-4 py-2 rounded-full text-sm font-medium 
          ${!selectedCategory 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'}
          transition-colors duration-200
        `}
      >
        All
      </button>
      
      {visibleCategories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium 
            whitespace-nowrap
            ${selectedCategory === category
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'}
            transition-colors duration-200
          `}
        >
          {category}
        </button>
      ))}
      
      {hasMore && (
        <div className="relative group">
          <button className="px-3 py-2 text-sm text-gray-400 hover:text-white">
            +{categories.length - maxVisible} more
          </button>
          <div className="absolute z-10 hidden group-hover:block mt-1 w-48 bg-gray-800 rounded-md shadow-lg py-1">
            {categories.slice(maxVisible).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`
                  block w-full text-left px-4 py-2 text-sm 
                  ${selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
