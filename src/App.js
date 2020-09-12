import React, { useState } from 'react';
import AppContext from './context/context';
import Message from './components/Message';
import Message2 from './components/Message2';
import './App.css';

function App() {
  const [appState, setAppState] = useState({
    magicNumber: 1
  })

  const changeNumber = () => {
    setAppState({
      ...appState,
      magicNumber: Math.floor(Math.random() * 20)
    });
  }

  return (
    <AppContext.Provider value={appState}>
      <button onClick={() => changeNumber()}>Change Number</button>
      <Message />
      this should be same:
      <Message2 />
    </AppContext.Provider>
  );
}

export default App;
