const counterReducer = (state = 1, { type }) => {
  switch (type) {
    case 'INCREMENT_COUNT':
      return state + 1;

    default:
      return state;
  }
};

export default counterReducer;
