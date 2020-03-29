import React, { useEffect } from 'react'
import Seo from './Seo';

function App(props) {

  useEffect(() => {
    console.log('component mounted or updated');
  });

  useEffect(() => {
    return () => {
      console.log('component will unmount');
    }
  }, []);

  return (
    <>
      <Seo />
      <p>Hello, world!</p>
    </>
  );
}

export default App
