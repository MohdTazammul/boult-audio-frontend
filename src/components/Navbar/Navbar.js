import React from 'react'
import { Icon } from '@iconify/react';
import "./style.css"
function Navbar() {
  return (
    <div>
      <div className='slider'>
        <div>Get 5% OFF upto ₹50 on all UPI Orders</div>
      </div>
      <div id='navbar'>
        <div className='links'>
            <div>
            <img src='https://user-images.githubusercontent.com/90475607/187048302-c4430181-c367-4a23-a913-871774aa2457.png' />
            </div>
            <div>
                <p>Shop by Category</p>
                <p>Shop by Activity</p>
                <p>Support &amp; warranty</p>
                <p>Contact us</p>
                <p>Company</p>
            </div>
        </div>
        <div className='icons'>
        <Icon icon="carbon:search" color="white" />
        <Icon icon="mingcute:user-2-line" color="white" />
        <Icon icon="mingcute:shopping-bag-2-line" color="white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar