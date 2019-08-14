
module.exports = function (req, res) {
  res.send([
    {
      month: 1,
      amount: 500
    },
    {
      month: 2,
      amount: 700
    },
    {
      month: 3,
      amount: 1000
    },
    {
      month: 4,
      amount: 1500
    }
  ]);
};
