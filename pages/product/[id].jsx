import React, {useState} from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import PizzaImg from '../img/pizza.png';
import SizeImg from '../img/size.png'
import axios from 'axios';
const Product = ({pizza}) => {
  const [size,setSize]= useState(0);
  
  console.log(pizza)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.imgContainer}>
          <Image src={PizzaImg} objectFit='contain' layout='fill' alt="" />
      </div>  
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className = {styles.sizes}>
          <div className={styles.size} onClick={()=> setSize(0)}>
            <Image src={SizeImg} layout='fill' alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={()=> setSize(1)}>
          <Image src={SizeImg} layout='fill' alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={()=> setSize(2)}>
          <Image src={SizeImg} layout='fill' alt="" />
            <span className={styles.number} >Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map(option=>(

            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          
        </div>
        <div className={styles.add}>
          <input
          type='number'
          defaultValue={1}
          className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}



export default Product;
