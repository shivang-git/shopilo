import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const ProductCard = ({grid}) => {
    let location=useLocation()
  return (
    <div className={`${location.pathname==='/store' ? `col-${grid} pb-4` : "col-3 pb-4" }`} >
        <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
            <div className="product-image">
                <img className='img-fluid d-block mx-auto' src="images/watch.jpg" alt="watch" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Watch</h6>
                <h5 className='title'>
                        Realme watch 2 Neo
                </h5>
                <p className={grid===12?'d-block description':'d-none description'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, eius reprehenderit. Rem magnam aut autem illum totam reiciendis aspernatur pariatur.</p>
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