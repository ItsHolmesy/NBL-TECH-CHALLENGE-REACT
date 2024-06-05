import { useState, useEffect } from 'react';

// Hook for categorising products
const useCategorisedProducts = (initialProducts) => {
  const [categorisedProducts, setCategorisedProducts] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  // Categorise products function
  const categoriseProducts = (products) => {
    const categorised = {};
    products.forEach(product => {
      const category = product.category;
      if (!categorised[category]) {
        categorised[category] = [];
      }
      categorised[category].push(product);
    });
    return categorised;
  };

// Categorise when initialProducts prop changes
  useEffect(() => {
    // Categorise the initial products
    const categorized = categoriseProducts(initialProducts);
    // Update state
    setCategorisedProducts(categorized);
    // First Category is set as active by default.
    if (Object.keys(categorized).length > 0) {
      setActiveCategory(Object.keys(categorized)[0]);
    }
  }, [initialProducts]);

  // Handle Category tab click
  const handleCategoryClick = (category) => {
    // Set selected category as active
    setActiveCategory(category);
  };

  return { categorisedProducts, activeCategory, handleCategoryClick };
};

export default useCategorisedProducts;