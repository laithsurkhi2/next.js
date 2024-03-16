import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Pizza from '../pages/img/pizza.png'
import Image from 'next/image'
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src={Pizza} alt="" width="300" height="300" />
      <h1 className={styles.title}>Range of Flavours</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
      Our handcrafted pizzas boast fresh ingredients and authentic flavors, ensuring every bite is a delight. Join us for a slice of Italy today!
     </p>
    </div>
  )
}

export default PizzaCard
