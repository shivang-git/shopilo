import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'

import watch from '../images/watch.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'


const ProductCard = ({grid}) => {
    let location=useLocation()
  return (
    <div className={`${location.pathname==='/store' ? `col-${grid} pb-4` : "col-3 pb-4" }`} >
        <Link to={`${location.pathname==='/'? 'store/:id':':id'}`} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link to={`${location.pathname==='/'? 'store/:id':'/:id'}`}><img src={wish} alt="wishlist" /></Link>
        </div>
            <div className="product-image">
                <img className='img-fluid d-block mx-auto' src={watch} alt="watch" />
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
                    <Link><img src={prodcompare} alt="compare" /></Link>
                    <Link><img src={view} alt="view" /></Link>
                    <Link><img src={addcart} alt="addcart" /></Link>
                    
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard