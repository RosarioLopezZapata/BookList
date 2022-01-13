import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";


import styles from './index.module.css'

import { getAllBooks} from "../../redux/actions";
import BooksCards from "../BooksCards";


export default  function HomeP (){
    
    //aca nos traemos la info de la api
    
    const dispatch = useDispatch();
      
    const allBooks = useSelector((state) => state.books);
    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);
    

return(
    
        <div className={styles.main}>
             <Link to='/addbook'>
                <button className={styles.createactbtn} >Add Book</button>
             </Link>
             <BooksCards books = {allBooks} />
        </div>                
    
    )
}