const logger = (req, res, next) => {
  const startTime = new Date().toISOString();

  console.log(`[${startTime}] ${req.method} ${req.originalUrl}`);

  next();
};

module.exports = logger;
