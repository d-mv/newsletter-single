export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'DELETE_SOURCE':
      return action.payload;
    default:
      return state;
  }
};
