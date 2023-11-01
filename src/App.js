import logo from './logo.svg';
import Header from './components/header/Header';
import './App.scss'
import React, { useEffect, useState, useRef } from 'react';
import Body from './components/body/Body';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        setScrollPosition(appRef.current.scrollTop);
        console.log(appRef.current.scrollTop);
      }
    };

    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener('scroll', handleScroll);

      return () => {
        appElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <div className="App" ref={appRef}>
      <Header/>
      <Body appRef={appRef}/>
    </div>
  );
}

export default App;
