import React, { useState, useMemo } from 'react';
import Style from './products.module.css';
import FilterBar from './components/filterBar/filterBar';
import CatalogItem from './components/catalogItem/catalogItem';
import productsDB from '../../DB/products'; // Assuming the path to productsDB is correct

function Products() {
  const [filters, setFilters] = useState({
    price: null,
    category: [],
    color: [],
    availability: []
  });

  const filteredProducts = useMemo(() => {
    let result = productsDB;

    // Filter by price (show products with price <= selected price)
    if (filters.price !== null) {
      result = result.filter(product => parseFloat(product.price) <= parseFloat(filters.price));
    }

    // Filter by category
    if (filters.category.length > 0) {
      result = result.filter(product => filters.category.includes(product.category));
    }

    // Filter by color
    if (filters.color.length > 0) {
      result = result.filter(product => filters.color.some(col => product.colors.includes(col)));
    }

    // Filter by availability
    if (filters.availability.length > 0) {
      result = result.filter(product => filters.availability.includes(product.availability));
    }

    return result;
  }, [filters]);

  const handleFilterChange = (filter) => {
    if (filter.type === 'price') {
      setFilters(prevFilters => ({
        ...prevFilters,
        price: filter.value
      }));
    } else if (filter.type === 'category') {
      setFilters(prevFilters => {
        const newCategories = prevFilters.category.includes(filter.value)
          ? prevFilters.category.filter(cat => cat !== filter.value)
          : [...prevFilters.category, filter.value];
        return { ...prevFilters, category: newCategories };
      });
    } else if (filter.type === 'color') {
      setFilters(prevFilters => {
        const newColors = prevFilters.color.includes(filter.value)
          ? prevFilters.color.filter(col => col !== filter.value)
          : [...prevFilters.color, filter.value];
        return { ...prevFilters, color: newColors };
      });
    } else if (filter.type === 'availability') {
      setFilters(prevFilters => {
        const newAvailability = prevFilters.availability.includes(filter.value)
          ? prevFilters.availability.filter(avail => avail !== filter.value)
          : [...prevFilters.availability, filter.value];
        return { ...prevFilters, availability: newAvailability };
      });
    }
  };

  return (
    <section className={Style.container}>
      <FilterBar onFilterChange={handleFilterChange} />
      <CatalogItem products={filteredProducts} />
    </section>
  );
}

export default Products;
