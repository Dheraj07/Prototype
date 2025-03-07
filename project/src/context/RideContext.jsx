import { createContext, useContext, useReducer } from 'react';

const RideContext = createContext();

const initialState = {
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  selectedRide: null,
  user: null,
  isAuthenticated: false,
};

function rideReducer(state, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, [action.field]: action.value };
    case 'SET_SELECTED_RIDE':
      return { ...state, selectedRide: action.ride };
    case 'SIGN_IN':
    case 'SIGN_UP':
      return { 
        ...state, 
        user: action.user,
        isAuthenticated: true 
      };
    case 'SIGN_OUT':
      return { 
        ...state, 
        user: null,
        isAuthenticated: false 
      };
    default:
      return state;
  }
}

export function RideProvider({ children }) {
  const [state, dispatch] = useReducer(rideReducer, initialState);

  return (
    <RideContext.Provider value={{ state, dispatch }}>
      {children}
    </RideContext.Provider>
  );
}

export function useRide() {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error('useRide must be used within a RideProvider');
  }
  return context;
}