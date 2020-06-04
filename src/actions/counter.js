const increment = () => {
  return {
    type: "Increment",
  };
};
const decrement = () => {
  return {
    type: "Decrement",
  };
};
module.exports = { increment, decrement };
