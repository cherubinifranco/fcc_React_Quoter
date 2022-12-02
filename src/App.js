import NotFoundPage  from './components/NotFoundPage'
import { QuoteWrapper } from "./components/QuoteWrapper";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/' element= {<QuoteWrapper />} />
        

        <Route path='*' element= {<NotFoundPage />} />
      </Routes> 
    
    
    </BrowserRouter>
  )
}

export default App;
