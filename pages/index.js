import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import { useEffect } from 'react';
import axios from 'axios';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';

export default function Home(pizzaList){

    
    return(
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in New York</title>
                <meta name="description" content="Best pizza shop in down"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            <PizzaList />
        </div>
    ) 
}

