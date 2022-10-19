import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todo';
import { useCallback, useEffect } from 'react';
import { todoClicked } from './Redux/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch()
  const escFunction = useCallback((event) => {
   // console.log("escpe")

    if (event.keyCode === 27 ) {

   
      dispatch(todoClicked(false))
     
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  return (
    <div className="App">
      
      <Todo/>
    </div>
  );
}

export default App;
