import express from 'express';
import {
    activateAccount,
    deleteUser,
    getUserLoggedIn,
    register,
    userLogin,
    activateAccountByCode,
    forgotPassword,
    activateAccountResentLink,
    findForgotPasswordLink,
    checkForgotPasswordLink,
    changeForgotPassword,
    userLogout,
    getAllUserData,
    friendRequestSend,
    confirmFriendRequest
} from '../controllers/userController.js';
import  { authMiddleware }  from '../middlewares/authMiddleware.js';
import { loginMiddleware } from '../middlewares/loginMiddleware.js';

const router = express.Router();


router.route('/').post( register)
router.route('/login').post(userLogin);
router.route('/activation/:token').get(activateAccount);
router.route('/activation-code/').post(activateAccountByCode);
router.route('/activation-resent-link/').post(activateAccountResentLink);
router.route('/me').get(getUserLoggedIn);
router.route('/logout').post(userLogout);
router.route('/forgot-password').post(forgotPassword);
router.route('/find-forgot-password-link').post(findForgotPasswordLink);
router.route('/check-forgot-password-link').post(checkForgotPasswordLink);
router.route('/change-forgot-password').post(changeForgotPassword);
router.route('/:id').delete(deleteUser);
router.route('/:id').get( getAllUserData)
router.route('/add-friend/:senderId/:receiverId').get(friendRequestSend)
router.route('/confirm-friend-request/:senderId/:receiverId').get(confirmFriendRequest)

export default router;