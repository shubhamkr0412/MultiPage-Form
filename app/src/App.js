
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
   <>
     <Routes>
     <Route exact path="/" element={< FirstPage />}/> 
     <Route exact path="/second" element={< SecondPage />}/> 
     </Routes>
     
   </>
  );
}

export default App;
