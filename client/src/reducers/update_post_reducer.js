export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'UPDATE_POST':
      return action.payload;
    default:
      return state;
  }
};
