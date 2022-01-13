import React from "react";
import { Link } from "react-router-dom";

import styles from './index.module.css'

export default function BookCard({book}){
    return(
    <div className={styles.card}>
      <div className={styles.fles}>
          <Link to={"/" + book.id}>
          <button className={styles.title}>
          {book.title}
          </button>
          </Link>  
          <Link to={"edit/" + book.id}>
          <button className={styles.btn}>EDIT</button>
          </Link>
       </div>
  
    </div>
  )
};


