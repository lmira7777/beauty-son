import React, { useState } from 'react';
import Style from './filterBar.module.css';

function FilterBar({ onFilterChange }) {
  const colors_ = ['Blue', 'Green', 'Gray', 'Red', 'Yellow'];
  const [colors, setColors] = useState(colors_);
  const AllCategories_ = ['Skin Care', 'Body Care', 'Hair Care', 'Accessories'];
  const [allCategories, setAllCategories] = useState(AllCategories_);
  const [inputPrice, setInputPrice] = useState(0);
  const [sections, setSections] = useState({
    categories: false,
    price: false,
    colors: false,
    availability: false,
  });

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setInputPrice(price);
    onFilterChange({ type: 'price', value: price });
  };

  const handleToggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const handleCategoryChange = (category) => {
    onFilterChange({ type: 'category', value: category });
  };

  const handleColorChange = (color) => {
    onFilterChange({ type: 'color', value: color });
  };

  const handleFilterChange = (filterType) => {
    onFilterChange({ type: 'availability', value: filterType });
  };

  return (
    <section className={Style.container}>
      <div className={Style.allCategories}>
        <h5 onClick={() => handleToggleSection('categories')}>
          All Categories
          <i className={`fa-solid ${sections.categories ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </h5>
        <ul className={`${Style.categories} ${sections.categories ? Style.show : ''}`}>
          {allCategories.map((category, index) => (
            <li key={index}>
              <span>
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  onClick={(e) => e.stopPropagation()} // Prevents toggling section
                />{' '}
                {category}
              </span>
              <span>(44)</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={Style.filterPrice}>
        <h5 onClick={() => handleToggleSection('price')}>
          Filter by Price
          <i className={`fa-solid ${sections.price ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </h5>
        <ul className={`${Style.range} ${sections.price ? Style.show : ''}`}>
          <p>Price: $0 - ${inputPrice}</p>
          <input
            onChange={handlePriceChange}
            min="0"
            max="2000"
            value={inputPrice}
            step="1"
            type="range"
          />
        </ul>
      </div>
      <div className={Style.color}>
        <h5 onClick={() => handleToggleSection('colors')}>
          Color
          <i className={`fa-solid ${sections.colors ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </h5>
        <ul className={`${Style.colors} ${sections.colors ? Style.show : ''}`}>
          {colors.map((color, index) => (
            <li key={index}>
              <span>
                <input
                  type="checkbox"
                  onChange={() => handleColorChange(color)}
                  onClick={(e) => e.stopPropagation()} // Prevents toggling section
                />{' '}
                {color}
              </span>
              <span>(44)</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={Style.availability}>
        <h5 onClick={() => handleToggleSection('availability')}>
          Availability
          <i className={`fa-solid ${sections.availability ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </h5>
        <ul className={`${Style.isStock} ${sections.availability ? Style.show : ''}`}>
          <li>
            <span>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('inStock')}
              />{' '}
              In Stock
            </span>
          </li>
          <li>
            <span>
              <input
                type="checkbox"
                onChange={() => handleFilterChange('outOfStock')}
              />{' '}
              Out of Stock
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FilterBar;
