// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_4T2hWuoaNx0I9UzGkQiQu7nv00QV4kfNr5');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 33.22,
    currency: 'usd',
  });
})();