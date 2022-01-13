import React from "react";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{bookDetail} from '../../redux/actions';
import { useEffect } from 'react';

import styles from './index.module.css'

export default function DetailBook(props){
    
    let params = useParams();

    const dispatch= useDispatch()
    const book = useSelector((state)=>state.details)
    useEffect(()=>{
        dispatch(bookDetail(params.id))
    }, [dispatch,params.id]

    )
    
    return(
        <div className={styles.main}>
            <Link to='/'>
                <button className={styles.homebtn}>Home Page</button>
           </Link>
 
            
                <div className={styles.info}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <h3>Description: {book.description}</h3>            
                    
                </div>

            
        </div>

 
 )
}