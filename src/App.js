import logo from './logo.svg';
import Header from './components/header/Header';
import './App.scss'
import React, { useEffect, useState, useRef } from 'react';
import Body from './components/body/Body';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const appRef = useRef(null);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      if (appRef.current) {
        const scrollTop = appRef.current.scrollTop;
        const docHeight = appRef.current.scrollHeight - appRef.current.clientHeight;
        const scrollPercent = (scrollTop / (docHeight)) * 100;
        setScrollPercentage(scrollPercent);
      }
      
    };
    const handleScroll = () => {
      if (appRef.current) {
        setScrollPosition(appRef.current.scrollTop+(appRef.current.clientHeight*4/8));
      }
    };

    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener('scroll', handleScroll);
      appElement.addEventListener('scroll', calculateScrollPercentage);

      return () => {
        appElement.removeEventListener('scroll', handleScroll);
        appElement.removeEventListener('scroll', calculateScrollPercentage);
      };
    }
  }, []);
  return (
    <div className="App" ref={appRef}>

      <Header/>
      <Body appRef={appRef} docHeight={appRef.current?.scrollHeight - appRef.current?.clientHeight} doc scrollPosition={scrollPosition} scrollPercentage={scrollPercentage}/>
      <div className="Footer">
        <div className="FooterText">
          <p>© 2023 Felt</p>
          <p>A FarFetch Blockchain Solution for Strategic Management</p>
        </div>
        </div>
        
    </div>
  );
}

export default App;
