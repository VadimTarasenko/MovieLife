import React, { useEffect } from 'react';

import { getSearchValueByKey } from 'utilities/location';

function Film() {

  useEffect(() => {
    const filmId = getSearchValueByKey('id');
    console.log(filmId)
  }, []);

  return (
    <div>
      film page
    </div>
  )
}

export default Film;