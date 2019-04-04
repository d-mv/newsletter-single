export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'ADD_SOURCE':
      return action.payload;
    default:
      return state;
  }
};
