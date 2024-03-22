import styles from "../styles/PizzaList.module.css";

import React from 'react'
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Satisfy your cravings with the finest flavors at our cozy pizza spot. From the classic simplicity of a Margherita to our signature pies bursting with fresh toppings, each slice is crafted with care using only the best ingredients. Join us for a taste of tradition and experience the authentic essence of Italian cuisine in every bite.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza)=>(
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        
      </div>
    </div>
  )
}

export default PizzaList
