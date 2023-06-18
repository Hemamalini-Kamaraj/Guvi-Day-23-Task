import React from "react";

const Cart = ({ cartItems, removeItem }) => {
  const totalItem = cartItems.length;
  const sumTotalItems =
    totalItem === 0
      ? "0"
      : cartItems
          .map((items) => parseFloat(items.price))
          .reduce((a, b) => a + b);
  return (
    <div className="Cart">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-5">
            <div className="col-md-8">
              <div className="card">
                <h5 className="card-header bg-info">Cart</h5>
                <div className="card-body">
                  <ul
                    className="list-group list-group-flush bg-light"
                    style={{ minHeight: "140px" }}
                  >
                    {cartItems.map((cartItem) => {
                      return (
                        <CartItem
                          key={cartItem.id}
                          cartItem={cartItem}
                          removeItem={removeItem}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 fw-bold">
              <div className="row justify-content-center">
                <div className="card bg-info">
                  <h5 className="card-header">Cart Info</h5>
                  <div className="card-body">
                    <p className="d-flex justify-content-between">
                      <span>Total Items</span>
                      <span>{totalItem}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>${sumTotalItems}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Total(Incl. taxes)</span>
                      <span>
                        ${totalItem === 0 ? "0" : sumTotalItems }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function CartItem({ cartItem, removeItem }) {
  return (
    <li className="list-group-item gy-5">
      <div className="row">
        <div className="col-sm-3">
          <img src={cartItem.image} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-sm-9">
          <h3 className="card-text">{cartItem.name}</h3>
          <p>${cartItem.price}</p>
          <button
            onClick={() => removeItem(cartItem.id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Cart;