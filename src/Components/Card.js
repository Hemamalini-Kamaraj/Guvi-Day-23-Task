import React from "react";

const Card = ({ productdata, addItem, cartItems }) => {
  return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productdata.map((product) => {
              return (
                <CardData
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  starReview={product.starReview}
                  badge={product.badge}
                  offerEnabler={product.offerEnabler}
                  offerPrice={product.offerPrice}
                  key={product.id}
                  id={product.id}
                  addItem={addItem}
                  cartItems={cartItems}
                />
              );
            })}
          </div>
        </div>
      </section>
  );
};

function CardData({
  name,
  image,
  price,
  starReview,
  badge,
  offerEnabler,
  offerPrice,
  id,
  addItem,
  cartItems,
}) {
  let existId = cartItems.map((obj) => obj.id).includes(id);

  return (
    <div className="col mb-5" key={id}>
    <div className="card h-100">
        {/* <!-- Sale badge--> */}
        {badge? <div className={"badge bg-dark text-white position-absolute"} style={{marginTop: 0.5 + "em", marginRight: 0.5 + "em"}}>Sale</div> : ""}
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={image} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
            <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{name}</h5>
                {/* <!-- Product reviews--> */}
                {
                starReview? <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                </div> : ""
                }
                {/* <!-- Product price--> */}
                {offerEnabler? <span className="text-muted text-decoration-line-through">${offerPrice}</span>:""}
                ${price}
            </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              disabled={existId}
              onClick={() => {
                addItem(id);
              }}
              href="#"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;