import jwt from 'jsonwebtoken';
import createError from "../utility/createError.js";



export const loginMiddleware = (req, res, next) => {
    try {

        const token = req.cookies.access_token;

        if (!token) {
            return next(createError(401, 'Invalid token'))
        }

        const login_user = jwt.verify(token, process.env.JWT_SECRET);

        if (!login_user) {
            return next(createError(401, 'Invalid User'))
        }

        if (login_user.id != req.params.id) {
            return next(createError(401, 'User Unauthorized'))
        }

        if (login_user) {
            req.user = login_user;
            next()
        }
        
    } catch (error) {
        next(error)
    }
}