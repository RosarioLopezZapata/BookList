import React, {useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{bookDetail} from '../../redux/actions';
import { putBook} from '../../redux/actions';
import { useEffect } from 'react';

import styles from './index.module.css'

export default function EditBook(props){
    
    let params = useParams();

    const dispatch= useDispatch()
    const book = useSelector((state)=>state.details)
    useEffect(()=>{
        dispatch(bookDetail(params.id))
    }, [dispatch,params.id]

    )
    
    const [input, setInput] = useState({
        title:book.title,
        description:book.description,
        
    })

    function handleChange (e){
        


        setInput({
            ...input,
            [e.target.name]: e.target.value,

        });



    }

    function handleSubmit(e){
        e.preventDefault();
        
        dispatch(putBook(input,params.id))
        alert('Book updated')
        
    }


    return(
        <div className={styles.main}>
        <form    onSubmit ={(e)=> handleSubmit(e)}>
            
                <button className={styles.info} type='submit'>
 
                <Link to='/'>
                        <button className={styles.homebtn}>Home Page</button>
                </Link>
 

                    <input 
                        
                        type='text' 
                        value={input.title} name='title' 
                        onChange={(e)=>handleChange(e)}
                        placeholder={book.title}

                    />
                    <h3>Description: </h3>            
                    <input 
                        
                        type='text' 
                        value={input.description} 
                        name='description' 
                        onChange={handleChange}
                        placeholder={book.description}
                    />
 
                    
                </button>
            
                </form>
        </div>

 
 )
}