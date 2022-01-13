import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { postBook} from '../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';
import styles from './index.module.css'


export default function AddBook (){

    const dispatch = useDispatch();
    

    const [input, setInput] = useState({
        title:'',
        description:'',
        
    })
    //handlers

    function handleChange (e){
        
        setInput({
            ...input,
            [e.target.name]: e.target.value,

        });

    }
    
    function handleSubmit(e){
        e.preventDefault();
        
        dispatch(postBook(input))
        alert('Book added')

        setInput({
            title: "",
            description: "",
        })
        
    }

    
      return(
          
        <div className={styles.main}>
            <Link to='/'>
                <button className={styles.homebtn}>Home</button>
            </Link>
        <div className={styles.for}>
            <h1>Add a book!</h1>

            <form onSubmit ={(e)=> handleSubmit(e)}>
                <div>
                <label>Title:</label>
                    <input 
                        type='text' 
                        value={input.title} name='title' 
                        onChange={(e)=>handleChange(e)}
                    />
            </div>

                <div>
                <label>Description:</label>
                    <input 
                        type='text' 
                        value={input.description} 
                        name='description' 
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' className={styles.createbtn}>Add Book</button>
            </form>
 
            </div>
        </div>
    )
}