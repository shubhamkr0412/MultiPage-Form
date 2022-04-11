
import {Routes,Route} from "react-router-dom"
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
   <>
     <Routes>
     <Route exact path="/" component={FirstPage}/> 
     </Routes>
     
   </>
  );
}

export default App;
