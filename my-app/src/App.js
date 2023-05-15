import {Route,Routes, BrowserRouter} from 'react-router-dom'

import './App.css';

import AddBook from './components/AddBook';
import BookStore from './components/BookStore';

const App = () => (
 
      <BrowserRouter>
        <Routes>
        <Route exact path="/" Component={BookStore} />
        <Route exact path="/add-book" Component={AddBook} />
        </Routes>
      </BrowserRouter>
)
export default App;