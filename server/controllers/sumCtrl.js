function sum(num1, num2) {
  return Number(num1) + Number(num2);
}

const toAdd = (req, res) => {
  const { num1, num2 } = req.body.params;
  res.json(Number(num1) + Number(num2));
};

module.exports = {
  toAdd,
  sum,
};
