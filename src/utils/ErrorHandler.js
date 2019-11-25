const chalk = require('chalk');

/**
 * @param {Request} _req Express HTTP request.
 * @param {Response} res Express HTTP response.
 * @param {number} statusCode Status code to send.
 * @param {string} error Title or short description of error.
 * @param {string} errorMessage Summary, message, or description of error.
 * @param {*} logger Winston logger object to log to.
 */
function handleServerError(_req, res, statusCode=500, error='', errorMessage='', logger=undefined) {
  if (logger) logger.log({ level: 'error', error, errorMessage });
  if (statusCode < 500 || statusCode > 599) statusCode = 500;
  return res.status(statusCode).send({
    error,
    errorMessage,
  });
}

/**
 * @param {Request} _req Express HTTP request.
 * @param {Response} res Express HTTP response.
 * @param {number} statusCode Status code to send.
 * @param {string} error Title or short description of error.
 * @param {string} errorMessage Summary, message, or description of error.
 * @param {*} logger Winston logger object to log to.
 */
function handleClientError(_req, res, statusCode=400, error='', errorMessage='', logger=undefined) {
  if (logger) logger.log({ level: 'error', error, errorMessage });
  if (statusCode < 400 || statusCode > 499) statusCode = 400;
  return res.status(statusCode).send({
    error,
    errorMessage,
  });
}

function handleUnauthorizedError(req, res, logger=undefined) {
  if (logger) logger.log({ level: 'warn', error: 'Unauthorized Request', request: req,});
  return res.sendStatus(401);
}

/**
 * Console logs with red chalk.
 * @param {string} message Message to console log.
 */
function consoleError(message) {
  console.log(chalk.red(message));
}

module.exports = { handleServerError, handleClientError, handleUnauthorizedError, consoleError };
