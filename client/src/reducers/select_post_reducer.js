export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'SELECT_POST':
      return action.payload;
    default:
      return state;
  }
};
