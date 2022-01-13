import React from 'react';

import styles from './index.module.css'

import BookCard from '../BookCard';

export default function BooksCards({books}) {
  // acá va tu código
  
  return (
        <div className={styles.main}>
        {
                books.map((b)=>{
                return (
                    <div key={b.id}>
                    
                        <BookCard
                          book={b}
                          
                        />
                    
                    </div>
                ) 

                })
        }   
        </div>

)};  


