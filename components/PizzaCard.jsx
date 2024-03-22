import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Pizza from '../pages/img/pizza.png'
import Image from 'next/image'
import Link from 'next/link'
const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
      <Image src={Pizza} alt="" width="300" height="300" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>
      {pizza.desc}
     </p>
    </div>
  )
}

export default PizzaCard
