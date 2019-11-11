const chalk = require('chalk');

function handleServerError(_, res, statusCode=500, error='', errorMessage='', logger=undefined) {
    if (logger) logger.log({ level: 'error', error, errorMessage });
    if (statusCode < 500 || statusCode > 599) statusCode = 500;
    return res.status(statusCode).send({
        error,
        errorMessage,
    });
}

function handleClientError(_, res, statusCode=400, error='', errorMessage='', logger=undefined) {
    if (logger) logger.log({ level: 'error', error, errorMessage });
    if (statusCode < 400 || statusCode > 499) statusCode = 400;
    return res.status(statusCode).send({
        error,
        errorMessage,
    });
}

function consoleError(message) {
    console.log(chalk.red(message));
}

module.exports = { handleServerError, handleClientError, consoleError };
