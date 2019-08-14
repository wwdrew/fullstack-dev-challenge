
const MAX_MONTHS = 50;

module.exports = function (req, res) {
  console.log({queryParams: req.query});
  const { alreadySaved, monthlySaving, interest, interestPeriod } = req.query;
  let runningTotal = parseInt(alreadySaved, 10);
  const interestRate = parseFloat(interest) / 100;
  const monthlyAmount = parseInt(monthlySaving, 10);
  const results = [];

  for (let month = 1; month <= MAX_MONTHS; month += 1) {
    runningTotal += monthlyAmount;

    if (interestPeriod === 'monthly') {
      runningTotal = runningTotal + (runningTotal * interestRate);
    } else if (interestPeriod === 'quarterly' && (month % 4 === 0)) {
      runningTotal = runningTotal + (runningTotal * interestRate);
    } else if (interestPeriod === 'annually' && (month % 12 === 0)) {
      runningTotal = runningTotal + (runningTotal * interestRate);
    }

    results.push({
      month,
      amount: runningTotal
    });
  }

  res.send(results);
};
