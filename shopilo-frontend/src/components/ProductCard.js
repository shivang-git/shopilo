import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
            <div className="product-image">
                <img src="images/watch.jpg" alt="watch" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Watch</h6>
                <h5 className='title'>
                    this is a watch for kids
                </h5>
                <p>Rs. 5000</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="images/prodcompare.svg" alt="compare" /></Link>
                    <Link><img src="images/view.svg" alt="view" /></Link>
                    <Link><img src="images/add-cart.svg" alt="addcart" /></Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard