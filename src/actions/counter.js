const incrementCount = () => ({
  type: 'INCREMENT_COUNT',
});

const asyncCountFunction = () => (dispatch) => {
  setInterval(() => {
    dispatch(incrementCount());
  }, 1000);
};

export default asyncCountFunction;
