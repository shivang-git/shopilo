import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header-top py-1'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Shop Smarter, Shop Trendier, Shop Shopilo – Your Style, Your Store.</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'> 
                Helpline: 
                <a className='text-white' href="tel:1800 556 2000">1800 556 2000</a>
              </p>
            </div>
          </div>
        </div>

      </header>
      <header className='header-mid py-2'>
          <div className='container-xxl'>
            <div className="row">
              <div className="header-mid-right col-4">
                <h2>
                  Shopilo.com
                </h2>
              </div>
              <div className="header-mid-search col-4 py-2">
                <form action="">
                  <input type="search" name="search" id="search" />
                </form>
              </div>
              <div className="header-mid-left col-4">
                <p>welcome</p>
              </div>
            </div>
          </div>
      </header>
    </>
  )
}

export default Header