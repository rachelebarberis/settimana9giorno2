import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList'; 
import booksHistory from '../src/data/history.json';
function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={booksHistory} /> 
      <MyFooter />
    </>
  );
}

export default App;
