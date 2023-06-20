import React, {Suspense} from 'react';
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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs : ['en', 'fr'],
    fallbackLng: "en",
    detection : {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches : ['cookie'],
    },
    backend : {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
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
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
