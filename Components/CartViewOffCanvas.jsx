import React from "react";


export default function CartViewOffCanvas ({cartItems}) {

    return (
    <>
{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></button> */}

<div className="offcanvas offcanvas-end" tabIndex="-1" id="cartviewoffcanvasRight" aria-labelledby="offcanvasRightLabel" style={{background: 
"lightskyblue"}}>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Item</h5>

        <button type="button" className="btn-close" 
        data-bs-dismiss="offcanvas" 
        aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

      {
        cartItems.length ? (
            cartItems.map(c=> <p>{c.title}</p>)

        ): (
            <p>Cart is Empty </p>
        )
      }
  </div>
</div>

        {/* <div classNameName="offcanvas offcanvas-end" tabIndex="-1" id="cartviewoffcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div classNameName="offcanvas-header">
                <h5 classNameName="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                Cart Items
                <button type="button" classNameName="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div classNameName="offcanvas-body">show cart items here...</div>
        </div> */}

        </> 

    );

}