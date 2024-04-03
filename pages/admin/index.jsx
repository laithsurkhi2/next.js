import React from 'react'
import { useState } from 'react'
import styles from '../../styles/Admin.module.css'
import pizza from '../img/pizza.png'
import Image from 'next/image'
import axios from 'axios'
const Index = ({orders, products}) => {
  console.log("Products array length:", products.length);
  const[pizzaList, setPizzaList]= useState(products);
  const[orderList, setOrderList]= useState(orders)
  const handleDelete= async(id)=>{
    try{
      const res= await axios.delete("http://localhost:3000/api/products/" +id);
      setPizzaList(pizzaList.filter((pizza)=> pizza._id !==id))
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
            <tbody>
            
                <tr className={styles.trTitle}>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </tbody>
            
            {pizzaList.map((product)=>(
              <tbody key={product._id}>
                <tr className={styles.trTitle}>
                <td>
                  <Image 
                      src={pizza} 
                       height={50} 
                       width={50} 
                       alt=""
                        
                    />
                </td>
                 <td>{product._id.slice(0,5)}...</td>
                <td>{product.title}</td>
               <td>${product.prices[0]}</td>
               <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button} 
                onClick={()=>handleDelete(product._id)}>Delete</button>
                </td>           
                </tr>
              </tbody>
            ))} 

        </table>
     </div>
     <div className={styles.item}>
     <h1 className={styles.title}>Orders</h1>
     <table className={styles.table}>
            <tbody>
                <tr className={styles.trTitle}>
                    <th>Id</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </tbody>
            <tbody>
                <tr className={styles.trTitle}>
                    <td>{"24678264873242".slice(0,5)}...</td>
                    <td>John Doe</td>
                    <td>$50</td>
                    <td>Paid</td>
                    <td>Preparing</td>
                    <td>
                        <button >Next Stage</button>
                    </td>
                </tr>
            </tbody>
        </table>
     </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    try {
      const productRes = await axios.get("http://localhost:3000/api/products"); 
      const orderRes = await axios.get('http://localhost:3000/api/orders'); 
  
      return {
        props: {
          orders: orderRes.data,
          products: productRes.data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error.response.data);
      return {
        props: {
          orders: [],
          products: [],
          error: error.message,
        },
      };
    }
  };

export default Index;
