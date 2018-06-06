const { Reviews } = require('../models');


module.exports = {
  create(req, res) {
    return Reviews
      .create(req.body)
      .then(review => res.status(201).send(review))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Reviews
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then(reviews => res.status(200).send(reviews))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Reviews
      .findById(req.params.id, {})
      .then((review) => {
        if (!review) {
          return res.status(404).send({
            message: 'Review Not Found',
          });
        }
        return res.status(200).send(review);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Reviews
      .findById(req.params.id, {})
      .then((review) => {
        if (!review) {
          return res.status(404).send({
            message: 'Review Not Found',
          });
        }
        return review
          .update(req.body)
          .then(() => res.status(200).send(review))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Reviews
      .findById(req.params.id)
      .then((review) => {
        if (!review) {
          return res.status(400).send({
            message: 'Review Not Found',
          });
        }
        return review
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
