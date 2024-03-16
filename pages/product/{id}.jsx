import React from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import PizzaImg from '../img/pizza.png';
import SizeImg from '../img/size.png'
const Product = () => {
  const [size,setSize]= useState(0);
    const pizza ={
        id:1,
        img: PizzaImg,
        name: "CAMPAGNOLA",
        price:[19.9, 23.9, 27.9],
        desc:'Savor the deliciousness of our pizza—perfectly crisp crust, tangy sauce, creamy cheese, and fresh toppings. Its a taste sensation you will not soon forget.',
    };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit='contain' layout='fill' alt="" />
      </div>  
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.size}>
          <Image src={size} layout='fill' alt="" />
          <span className={styles.number}>Small</span>
        </div>
        <div className={styles.size}>
        <Image src={SizeImg} layout='fill' alt="" />
          <span className={styles.number}>Medium</span>
        </div>
        <div className={styles.size}>
        <Image src={SizeImg} layout='fill' alt="" />
          <span className={styles.number}>Large</span>
        </div>
      </div>
    </div>
  )
}

export default Product;
