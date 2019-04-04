export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    default:
      return state;
  }
};
