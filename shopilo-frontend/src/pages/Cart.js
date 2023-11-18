import React from 'react'
import { Link } from 'react-router-dom'
const cart = () => {
  return (
    <section className="cart-wrapper home-wrapper-1 py-5">
   <div className="container">
  <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
      <div className="col-md-9">
        <div className="ibox">
          <div className="ibox-title">
            <span className="pull-right">
              (<strong>5</strong>) items
            </span>
            <h5>Items in your cart</h5>
          </div>
          <div className="ibox-content">
            <div className="table-responsive">
              <table className="table shoping-cart-table">
                <tbody>
                  <tr>
                    <td width={90}>
                      <div className="cart-product-imitation"></div>
                    </td>
                    <td className="desc">
                      <h3 className='cart-product-imitation-title'>
                        <Link href="#" className="text-navy">
                          Desktop publishing software
                        </Link>
                      </h3>
                      <p className="small">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                      </p>
                      <dl className="small m-b-none">
                        <dt>Description lists</dt>
                        <dd>
                          A description list is perfect for defining terms.
                        </dd>
                      </dl>
                      <div className="m-t-sm">
                        <Link href="#" className="text-muted">
                          <i className="fa fa-gift" /> Add gift package
                        </Link>
                        |
                        <Link href="#" className="text-muted">
                          <i className="fa fa-trash" /> Remove item
                        </Link>
                      </div>
                    </td>
                     <td width={65}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={1}
                      />
                    </td>
                    <td>
                      <h4>Rs.18000</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
      <div className="col-md-3">
        <div className="ibox">
          <div className="ibox-title">
            <h5>Cart Summary</h5>
          </div>
          <div className="ibox-content">
            <span>Total</span>
            <h2 className="font-bold">Rs.39000</h2>
            <hr />
            <span className="text-muted small">
              *For United States, France and Germany applicable sales tax will
              be applied
            </span>
            <div className="m-t-sm pt-3">
              <div className="btn-group">
                <Link to='checkout' className=" checkout">
                  <i className="fa fa-shopping-cart" /> Checkout
                </Link>
                <Link href="#" className="btn btn-white btn-sm">
                    Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ibox">
          <div className="ibox-title">
            <h5>Support</h5>
          </div>
          <div className="ibox-content text-center">
            <h3>
              <i className="fa fa-phone" /> 1800 1000 1312
            </h3>
            <span className="small">
              Please contact with us if you have any questions. We are avalible
              24h.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
  
  )
}

export default cart