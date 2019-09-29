const initialState = {
  allMovies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_MOVIES':
      return {
        ...state,
        allMovies: action.payload
      }
    default:
      return state;
  }
}