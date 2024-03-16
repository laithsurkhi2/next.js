import React, { useState } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image';
import arrowOne from '../pages/img/arrowl.png'
import arrowRight from '../pages/img/arrowr.png'
import featuredOne from '../pages/img/featured.png'
import featuredTwo from '../pages/img/featured2.png'
import featuredThree from '../pages/img/featured3.png'
const Featured = () => {
   const[index, setIndex]=useState(0);

   const handleArrow=(direction)=>{
    if(direction ==="l"){
      setIndex(index !==0 ? index-1 : 2)
    }
    if(direction ==="r"){
      setIndex(index !==2 ? index+1 : 0)
    }
   }
  return (
    <div className={styles.container}>
        <div className= {styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
      <Image src={arrowOne} alt='' layout='fill' objectFit='contain' />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          <div className={styles.imgContainer} >
            <Image src={featuredOne} alt='' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imgContainer} >
            <Image src={featuredTwo} alt='' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.imgContainer} >
            <Image src={featuredThree} alt='' layout='fill' objectFit='contain' />
          </div>
                
            
      </div>
      <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
        <Image src={arrowRight} alt='' layout='fill' objectFit='contain'  />
      </div>
    </div>
  )
}

export default Featured
