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
    }
};
