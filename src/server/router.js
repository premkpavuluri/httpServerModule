const createRouter = (handlers) => (req, res) => {
  return handlers.some(handler => handler(req, res));
};

module.exports = { createRouter };
