// fns is array of functions x is a function output reduce accumulates all function output and lastly the function is called with initial value in x
const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

const priceCalculator = (
  taxPercentage = 0.3, 
  serviceFees = 10, 
  price, 
  discount, 
  percentCoupon, 
  valueCoupon,
  weight, 
  $PerKg
) => {
  const applyTax           = (val) => val * (1 + taxPercentage)
  const applyServiceFees   = (val) => val + serviceFees
  const applyPercentCoupon = (val) => val - val * percentCoupon
  const applyValueCoupon   = (val) => val - valueCoupon
  const applyDiscount      = (val) => val - discount
  const applyShippingCost  = (val) => val + weight * $PerKg
return pipe(
    applyPercentCoupon,
    applyDiscount,
    applyValueCoupon,
    applyShippingCost,
    applyServiceFees,
    applyTax
  )(price)
}
