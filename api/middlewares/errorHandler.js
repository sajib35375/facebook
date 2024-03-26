

const errorHandler = (error, req, res, next) => {
    const statusErr = error.status || 500;
    const messageErr = error.message || 'Unknown Error';

    return res.status(statusErr).json({
        status : statusErr,
        message : messageErr,
        stack : error.stack
    })
}


export default errorHandler;