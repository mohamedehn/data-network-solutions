import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Career from "./pages/Career"
import Mentions from './pages/Mentions';
import Job from './pages/Job';
import Error from './pages/Error';
import Success from './pages/Success';
import Cookies from "./pages/Cookies";
import store from './app/store'
import { Provider } from 'react-redux'


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/carrieres" element={<Career/>}/>
          <Route path="/mentions" element={<Mentions/>}/>
          <Route path="/job/:id" element={<Job/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cookies" element={<Cookies/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
