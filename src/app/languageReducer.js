// Langue par défaut
const initialState = 'fr';

// Reducer pour gérer les changements de langue
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return action.payload; // Mettre à jour l'état avec la nouvelle langue
    default:
      return state;
  }
};

export default languageReducer;
