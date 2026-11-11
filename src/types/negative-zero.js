console.log("Negative Zero");

// special numeric value with the sign bit

let negZero = -0;

console.log(typeof -0);
console.log(negZero === -0);

console.log(negZero.toString());
console.log(negZero === 0); // huh? 0 === -0?

console.log(Object.is(negZero, -0)); // quadruple equals 
// cause it doesn't lie about negative zero

console.log(Math.sign(-2));
console.log(Math.sign(-0));

function formatTrend(trendRate) {
  let direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "🔻" : "🔺";
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0)); // zero's direction
console.log(formatTrend(0));
