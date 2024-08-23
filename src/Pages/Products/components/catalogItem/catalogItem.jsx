import React from 'react';
import Style from './catalogItem.module.css';
import { Link } from 'react-router-dom';

function CatalogItem({ products }) {
  return (
    <section className={Style.container}>
      <div className={Style.tools}>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10H4C2.89543 10 2 9.10457 2 8V4Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M14 4C14 2.89543 14.8954 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H16C14.8954 10 14 9.10457 14 8V4Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M2 16C2 14.8954 2.89543 14 4 14H8C9.10457 14 10 14.8954 10 16V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20V16Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M14 16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20V16Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>

        <p>Showing 1-{products.length} of {products.length} results</p>
      </div>
      <div className={Style.products}>
        {products.map(product => (
          <Link to={`/shop/${product.id}`} key={product.id} className={Style.product}>
            <div className={Style.productIMG}>
              <img src={product.img} alt="Product Image" />
              <div className={Style.icons}>
                {/* Icons here */}
              </div>
            </div>
            <p className={Style.productName}>{product.name}</p>
            <p>
              <span>{product.discountPrice ? `$${product.discountPrice}` : null}</span>
              <span className={`${product.discountPrice ? Style.lineThrough : ''}`}>{`$${product.price}`}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CatalogItem;
