import styles from "./Drink.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Drink(props) {
  return (<div className={styles.drink}>
    <h6> id: {props.id}</h6>
    <h6>Drink name: {props.name}</h6>
    <h6>Book price: ${props.price}</h6>
    <h6>type: {props.type}</h6>
    <h6>calories: {props.calories}</h6>
    <h6>inStock: {props.inStock}</h6>
  </div>);
}