const stripe= require("stripe")(process.env.STRIPE_SECRET);
require("dotenv").config()


module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_classes()
      .then(response => res.status(200).send(response))
     
      
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
    },

    getAllTime: (req, res, next) => {
      const dbInstance = req.app.get("db");

    dbInstance
    .get_all_time()
    .then(response => res.status(200).send(response))
    },



//Checkout request test
    checkout: (req, res) => {
      const {
        amount,
        token: { id }
      } = req.body;
      stripe.charges.create(
        {
          amount: amount,
          currency: "usd",
          source: id,
          description: "Testing..."
        },
        (err, charge) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            console.log(charge);
            return res.status(200).send(charge);
          }
        }
      );
    },
  }
