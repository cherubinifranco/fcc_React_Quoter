import NotFoundPage  from './components/NotFoundPage'
import { NewQuote } from "./components/NewQuote";
import { QuoteSorter } from "./components/QuoteSorter"
import { About } from './components/About'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/' element= {<QuoteSorter />} />
        <Route path='/new' element= {<NewQuote />} />
        <Route path='/about' element= {<About />} />
        

        <Route path='*' element= {<NotFoundPage />} />
      </Routes> 
    
    
    </BrowserRouter>
  )
}

export default App;
