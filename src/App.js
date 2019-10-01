import React, { useEffect } from 'react';

import { Header } from 'components/modules';
import Root from './Root';


function App() {

  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     
    //   });

  }, []);

  return (
    <div className='app'>
      <Header />
      <Root />
    </div>
  );
}

export default App;
