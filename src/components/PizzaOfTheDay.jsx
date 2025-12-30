import { usePizzaOfTheDay } from "../customHooks/usePizzaOfTheDay";
import useCurrency from "../customHooks/useCurrency";

export default function PizzaOfTheDay() {
  const pizza = usePizzaOfTheDay();

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <p className="pizza-of-the-day-price">
            From: <span>{useCurrency(pizza.sizes.S)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizza.image}
          alt={pizza.name}
        />
      </div>
    </div>
  );
}
