module.exports = (app) => {
  app.use(function (req, res, next) {
    const error = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function (error, req, res, next) {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    res.status(error.status || 500);
    res.json({message: `Error: ${error.status}`});
  });
}