export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'UPDATE_SOURCE':
      return action.payload;
    default:
      return state;
  }
};
