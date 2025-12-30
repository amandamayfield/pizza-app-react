import useCurrency from "../customHooks/useCurrency";

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          // using the index as the key is recommended here
          // because you can have multiple of the same pizza
          // in your cart, and then the key would not be unique
          <li key={index}>
            <span className="size">{item.size}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{item.price}</span> -
          </li>
        ))}
      </ul>
      <p>Total: {useCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
