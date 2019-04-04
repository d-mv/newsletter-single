export default (state = [], action) => {
  // Handle actions
  switch (action.type) {
    case 'SHOW_MODULE':
      return action.payload;
    default:
      return state;
  }
};
