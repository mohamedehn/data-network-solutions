import store from './store';

export const changeLanguage = (lang) => {
  store.dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: lang,
  });
};
