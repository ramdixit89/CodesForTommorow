import React, { useEffect, useContext } from 'react';
import Cards from './components/Cards';
import Loading from './components/Loading';
import { AppContext, AppProvider } from './contextAPI/AppContext';

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 5000);
  }, [dispatch]);

  return (
    <>
      {state.loading ? <Loading /> : <Cards />}
    </>
  );
};

const AppWrapper = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default AppWrapper;

