import storefrontList from '../../assets/storefrontList.json'
import Drink from '../Drink/Drink';
import { useState } from 'react';

export default function DrinkList() {

    const [drinks, setDrinks] = useState(storefrontList); // this should be inside the DrinkList component

    const addDrink = (idToBeAdded) => {        
        const remainingDrinks = drinks.filter(
            (drink) => {
                return drink.id == idToBeAdded;
            }
        )
        // update drinks variable
        setDrinks(remainingDrinks);
    }

    // To save shopping cart items when cartItems is updated
useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // to load shopping cart iterms
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
    
    return (
        <div className="drink_list">
            <h2>Drink List</h2>
            {
                storefrontList.map(drink => (
                    <Drink id={drink.id} name={drink.name} price={drink.price} type={drink.type} 
                    calories={drink.calories} inStock={drink.inStock} key={drink.id} addHandler={addDrink}/>
                ))
            }
        </div>
    );
}
