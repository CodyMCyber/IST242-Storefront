import storefrontList from '../../assets/storefrontList.json'
import Drink from '../Drink/Drink';

export default function DrinkList() {
    
    return (
        <div className="drink_list">
            <h2>Drink List</h2>
            {
                storefrontList.map(drink => (
                    <Drink id={drink.id} name={drink.name} price={drink.price} type={drink.type} 
                    calories={drink.calories} inStock={drink.inStock} key={drink.id}/>
                ))
            }
        </div>
    );
}
