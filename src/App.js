import logo from './logo.svg';
import Header from './components/header/Header';
import './App.scss'
import React, { useEffect, useState } from 'react';
import Body from './components/body/Body';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      console.log(window.pageYOffset)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
