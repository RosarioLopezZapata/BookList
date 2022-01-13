import axios from 'axios';
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const BOOK_DETAIL='BOOK_DETAIL';
export const POST_BOOK='POST_BOOK';
export const PUT_BOOK='PUT_BOOK';

export function getAllBooks() {
    return async function (dispatch) {

        var json = await axios.get(
          "http://localhost:3001/books")
        return dispatch({ type: GET_ALL_BOOKS, payload: json.data });
      
    };
  } 


export function bookDetail(id){
  return async function(dispatch){
      try{
          var json = await axios.get('http://localhost:3001/books/'+id);
          return dispatch({
              type: BOOK_DETAIL,
              payload: json.data
          })
      } catch(error){
          console.log(error)
      }
  }

}

export function postBook(payload){
  return async function (dispatch){
      const response= await axios.post('http://localhost:3001/books/',payload)
      return dispatch({
        type : POST_BOOK,
        payload : response
      })
  }
}

//const id = req.params.id
export function putBook(payload,id){
  return async function (dispatch){
      const response= await axios.put('http://localhost:3001/books/'+id,payload)
      return dispatch({
        type : PUT_BOOK,
        payload : response
      })
  }
}


