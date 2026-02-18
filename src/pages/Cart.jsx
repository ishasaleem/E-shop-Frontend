function Cart({ cart, setCart }) {

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="mt-3">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="card mb-3 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p>${item.price}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
