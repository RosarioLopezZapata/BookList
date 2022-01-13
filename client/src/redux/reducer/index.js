// Importa las actions types que necesites acá:
import {
    GET_ALL_BOOKS,
    BOOK_DETAIL,
    POST_BOOK,
    PUT_BOOK,
    
  } from "../actions";
  
const initialState ={
    books:[],
    allbooks:[],
    details:[]

}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_ALL_BOOKS: 
            return {
              ...state,
              books: action.payload,
              allBooks: action.payload
            };
        
  
          case BOOK_DETAIL:
            return{
              ...state,
              details:action.payload  
          }
     
          
              case POST_BOOK:
              return {
                ...state
              }

              case PUT_BOOK:
              return {
                ...state,
                
              }

          default:
            return initialState;
        }
    
    
    }
    
    export default   rootReducer;