import './App.css';

import HomeP from './components/HomeP';
import { Routes, Route } from "react-router-dom";
import DetailBook from './components/DetailBook';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    
    <div className="App">
      
      <Routes>
      
          
          <Route exact path="/" element={<HomeP/>} />

          <Route path= "/:id" element= {<DetailBook />}/>
          <Route path= "/edit/:id" element= {<EditBook />}/>
          <Route path= "/addbook" element= {<AddBook />}/>

      </Routes>
      
    </div>
    
  );
}

export default App;
