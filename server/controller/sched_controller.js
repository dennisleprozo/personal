module.exports = {
  add: (req, res, next) => {
    let dbInstance = req.app.get("db");

    let { time } = req.body;
    console.log(time);

    dbInstance
      .add_schedule([time, req.session.user.sub])
      .then(response => {
        console.log(req.session);
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  get: (req, res, next) => {
    let dbInstance = req.app.get("db");

    let { schedule_id, time } = req.body;
    console.log(time);

    dbInstance
      .get_schedule([req.session.user.sub])
      .then(response => {
        console.log(req.session);
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { id } = req.params;
    console.log(req.params);

    dbInstance
      .delete_schedule([id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  update: (req, res, next) => {
    let dbInstance = req.app.get("db");
        let {  id, updatedPT  }=(req.body);

    dbInstance
      .update_schedule([updatedPT, id])
      .then(response => {
        res.status(200).send(response);
      })
      
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  }
};
