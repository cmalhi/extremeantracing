export default function generateAntWinLikelihoodCalculator() {
  var delay = 500 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();
  
  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}