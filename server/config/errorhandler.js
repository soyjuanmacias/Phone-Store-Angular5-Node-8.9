module.exports = (app) => {
  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    res.status(error.status || 500);
    res.json({message: `Error: ${error.status || 500}`});
  });
}