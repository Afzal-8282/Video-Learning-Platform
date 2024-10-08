
const ErrorMiddleware = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;

    err.message = err.message || "Internal Server Error";

    res.status(200).json({
        success: true,
        message: err.message,
    });
}

export default ErrorMiddleware;