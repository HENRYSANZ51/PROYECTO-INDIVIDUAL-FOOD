import './App.css';
import {Route, Routes,} from 'react-router-dom'
import {Landing, Home, Detail, Form, About} from './views/index'
import SearchBar from './SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
       <SearchBar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/:id' element={<Detail/>} />
        <Route path='/create' element={<Form/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
