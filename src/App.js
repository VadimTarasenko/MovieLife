import React, { useEffect } from 'react';

import { Header } from 'components/modules';
import { Main } from 'pages';


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
      <Main />
    </div>
  );
}

export default App;
