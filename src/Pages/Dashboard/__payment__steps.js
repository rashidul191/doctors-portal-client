/**
 *  # Client side
 * 1. install script react stripe js
 * $ npm install --save @stripe/react-stripe-js @stripe/stripe-js
 * open stripe account on stripe website
 * 3. get publishable key pk___
 * 4. Create Element wrapper using publishable key
 * 5. Create Checkout Form using Card element, useStripe, useElements
 * 6. get card elements info(credit card info)
 * 7. get credit card info/error + display card error (if any)
 * -----------------------------
 * # Server Side
 * 8. get client secret from backend via payment intent post api
 * 9. store client secret onb the side
 */