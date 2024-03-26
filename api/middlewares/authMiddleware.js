import jwt from "jsonwebtoken";
import createError from "../utility/createError.js";




export const authMiddleware = (req, res, next) => {

    try {
        const token = req.cookies.access_token;

        if (!token) {
            next(createError(401, 'You are not authenticated'));
        }

        const login_user = jwt.verify(token, process.env.JWT_SECRET)

        if (!login_user) {
            next(createError(401, 'These credential do not match your records'))
        }

        if (login_user) {
            req.user = login_user;
            next()
        }
        
    } catch (error) {
        next(error)
    }

}