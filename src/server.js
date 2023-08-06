// File: server.js

const express = require('express');
const Stripe = require('stripe');
const app = express();

const stripe = Stripe('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');

app.post('/create-checkout-session', async (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
