import React from 'react'
import Card from './Components/Card'
import { useState } from 'react'
import productData from './Data/Products'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const getData = productData.filter((inp) => inp.id === item);
    setCartItems([...cartItems, ...getData]);
  };

  const removeItem = (item) => {
    console.log("remove item", item);
    const filteredData = cartItems.filter((obj) => obj.id !== item);
    console.log(filteredData);
    setCartItems([...filteredData]);
  };

  return (
    <>
        {/* <!-- Nav Bar--> */}
        <Navbar cartItems={cartItems}/>
        {/* <!-- Header--> */}
        <header className="bg-dark py-1">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* <!-- Cart Items--> */}
        <Cart cartItems={cartItems} removeItem={removeItem} />
        {/* <!-- Section--> */}
        <section className="py-5">
          <Card productdata={productData} addItem={addItem} cartItems={cartItems}/>
        </section>
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </>
  )
}

export default App