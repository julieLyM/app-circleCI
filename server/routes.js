const sumRouter = require('./routes/sumRouter');

function routes(app) {
  app.use('/api/v1/sum/', sumRouter);
}

module.exports = routes;
