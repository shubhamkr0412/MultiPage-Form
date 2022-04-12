
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import DisplayPage from './components/DisplayPage';

function App() {
  return (
   <>
     <Routes>
     <Route exact path="/" element={< FirstPage />}/> 
     <Route exact path="/second" element={< SecondPage />}/>
     <Route exact path="/third" element={< DisplayPage />}/> 
     </Routes>
     
   </>
  );
}

export default App;
