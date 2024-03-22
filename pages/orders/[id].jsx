import React from 'react'
import styles from '../../styles/Order.module.css'
import Paid from '../img/paid.png'
import Image from 'next/image'
import Checked from '../img/checked.png'
import bake from '../img/bake.png'
import Bike from '../img/bike.png'
import Delivered from '../img/delivered.png'
const Order = () => {
    const status= 0;
    const statusClass=(index)=>{
        if(index-status <1) return styles.done
        if(index-status ==1) return styles.inProgress
        if(index-status >1) return styles.undone
    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>127836217836</span>
                        </td>
                        <td>
                            <span className={styles.name}>John Doe</span>
                        </td>
                        <td>
                            <span className={styles.address}>Elton Street 212-23 LA</span>
                        </td>
                        <td>
                            <span className={styles.total}>$79.80</span>
                        </td>
                </tr>
            </table> 
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src={Paid} width={30} height={30} alt="" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src={Checked} alt='' width={20} height={20} />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src={bake} width={30} height={30} alt="" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src={Checked} alt='' width={20} height={20} />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src={Bike} width={30} height={30} alt="" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src={Checked} alt='' height={20} width={20} />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src={Delivered} width={30} height={30} alt="" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src={Checked} alt='' height={20} width={20} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>PAID</button>
        </div>
        </div>
      
    </div>
  )
}

export default Order
