import styles from "./Drink.module.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Drink(props) {
  return (<div className={styles.drink}>
    <div className={styles.id}>id: {props.id}</div>
    <div className={styles.name}>Drink name: {props.name}</div>
    <div className={styles.price}>Book price: ${props.price}</div>
    <div className={styles.type}>type: {props.type}</div>
    <div className={styles.calories}>calories: {props.calories}</div>
    <div className={styles.inStock}>inStock: {props.inStock}</div>
    <button onClick={ () => props.addHandler(props.id) }>Add</button>
  </div>);
}