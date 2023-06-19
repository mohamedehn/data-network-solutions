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

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue sur React et react-i18next"
        }
      }
    },
    // @ts-ignore
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });

function Apps() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <Apps/>
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
