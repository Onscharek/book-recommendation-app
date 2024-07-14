import { Route, Routes } from 'react-router-dom';
import './App.css';


import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Computing from './pages/Computing';
import Drama from './pages/Drama';
import Fiction from './pages/Fiction';
import History from './pages/History';
import Horor from './pages/Horor';
import Romance from './pages/Romance';

import Profile from './pages/Profile';

import Description from './pages/Description';
import SearchResults from './pages/SearchResults';
import { Books } from './pages/Books';

  

function App() {
  return (
    <div className="App">
      <img className='bag' src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg" alt="books"  />


        
      <Routes>
                           {/* login reg home */}
      <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Register/>} />
        <Route path="/Home/:_id" element={<Home/>} />
                           {/* genras */}

        <Route path="/Computing/:_id" element={<Computing/>} />
        <Route path="/Drama/:_id" element={<Drama/>} />
        <Route path="/Fiction/:_id" element={<Fiction/>} />
        <Route path="/History/:_id" element={<History/>} />  
        <Route path="/Horor/:_id" element={<Horor/>} />  
        <Route path="/Romance/:_id" element={<Romance/>} />

        <Route path="/BooksFromYou/:_id" element={<Books/>} />

        <Route path="/Profile/:_id" element={<Profile />} />
  
        <Route path="/Description/:id" element={<Description />} />
 
        <Route path="/search-results/:query" element={<SearchResults />} />




      </Routes>
    </div>
  );
}

export default App;
                  //  org