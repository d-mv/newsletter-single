export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'SET_SOURCES':
      return action.payload;
    default:
      return state;
  }
};
