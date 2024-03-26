import jwt from 'jsonwebtoken';
import createError from "../utility/createError.js";



export const adminMiddleware = (req, res, next) => {
        try {

            const token = req.cookies.access_token;

            if (!token) {
                return next(createError(401, 'You are not Authenticated'));
            }

            const login_user = jwt.verify(token, process.env.JWT_SECRET);

            if (!login_user) {
                return next(createError(401, 'You are not Authenticated'));
            }

            if (!login_user.isAdmin) {
                return next(createError(401, 'You are not Authorized'));
            }

            req.user = login_user;
            next();
            
        } catch (error) {
            next(error)
        }
}