/**
 * This is Async Error Handler MiddleWare
 *  - Catch Error from any controller function and send it to Global error handler
 */
export const catchAsyncError = (fn) => async (req, res, next) => {
    fn(req, res, next).catch((err) => {
        next(err);
    });
};
