import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from "../utility/createError.js";
import {hashPassword, passwordCheck} from "../utility/hashPassword.js";
import {createToken, verifyToken} from "../utility/token.js";
import {sendActivationEmail, sendPasswordResetEmail} from "../utility/sendMail.js";
import {randomNumber} from "../utility/math.js";
import user from "../models/User.js";
import {isEmail, isMobile} from "../utility/valide.js";
import {sendSms} from "../utility/sendSMS.js";


export const register = async (req,res,next) => {

    const {first_name, sur_name, auth, birth_date, birth_month, birth_year, password, gender} = req.body;

    try {

        if (!first_name || !sur_name || !auth || !birth_date || !birth_month || !birth_year || !password || !gender){
            return next(createError(400, 'All Fields are required'))
        }


        let emailData = null;
        let mobileData = null;


        if (isEmail(auth)){
            emailData = auth
            const emailUser = await User.findOne({email: emailData});
            if (emailUser){
                return next(createError(400,'Email already exists !'))
            }

        }else if(isMobile(auth)) {
            mobileData = auth
            const mobileUser = await User.findOne({mobile: mobileData});
            if (mobileUser){
                return next(createError(400,'Mobile already exists !'))
            }
        }else{
            return next(createError(400,'Invalid mobile or email address'))
        }

        if (emailData){
            const activationCode = randomNumber(99999, 10000)

            const user = await User.create({ first_name, sur_name, email:emailData, mobile: mobileData, birth_date, birth_month, birth_year, gender, password:hashPassword(password), access_token:activationCode });

            if (user){
                const activationToken = createToken({ id: user._id }, '30d')

                const activationLink = `${process.env.APP_URL}/api/v1/user/activation/${activationToken}`;



                sendActivationEmail(user.email,'Account Activation',{
                    name : user.first_name+" "+ user.sur_name,
                    link:activationLink,
                    code: activationCode
                })

                res.status(200).cookie('otp', user.email, { expires: new Date(Date.now() + 1000*60*30) }).json({
                    message : "User created successfully",
                    user: user
                })
        }


       }

        if (mobileData){
            const activationCode = randomNumber(99999, 10000)

            const user = await User.create({ first_name, sur_name, email:emailData, mobile: mobileData, birth_date, birth_month, birth_year, gender, password:hashPassword(password), access_token:activationCode });

            if (user){
                sendSms(user.mobile,`Hi ${user.first_name} ${user.sur_name}, Your otp code id ${activationCode}`)

                res.status(200).cookie('otp', user.mobile, { expires: new Date(Date.now() + 1000*60*30) }).json({
                    message : "User created successfully",
                    user: user
                })
            }


        }
        
    } catch (error) {
        next(error)
    }
}


export const activateAccountResentLink = async (req, res, next) => {
    const {auth} = req.body;

    try{

        let emailData = null;
        let mobileData = null;
        let emailUser;
        let mobileUser;

        if (isEmail(auth)){
            emailData = auth
            emailUser = await User.findOne({email: auth});
            if(!emailUser){
                next(createError(400,'Invalid email address'));
            }

        }else if(isMobile(auth)) {
            mobileData = auth
            mobileUser = await User.findOne({mobile: auth});
            if(!mobileUser){
                next(createError(400,'Invalid mobile address'));
            }
        }else{
           return next(createError(400,'Invalid mobile or email address'))
        }


        if (emailData){
            const activationToken = createToken({ id: emailUser._id }, '30d')
            const activationCode = randomNumber(99999, 10000)
            const activationLink = `${process.env.APP_URL}/api/v1/user/activation/${activationToken}`;

            sendActivationEmail(emailUser.email,'Account Activation',{
                name : emailUser.first_name+" "+ emailUser.sur_name,
                link:activationLink,
                code: activationCode
            });

            await User.findByIdAndUpdate(emailUser._id, {
                access_token : activationCode
            })

            res.status(200).json({
                message : "Reset link send your email"
            })
        }

        if (mobileData){
            const activationCode = randomNumber(99999, 10000)
            sendSms(mobileUser.mobile,`Hi ${mobileUser.first_name} ${mobileUser.sur_name}, Your otp code id ${activationCode}`)

            await User.findByIdAndUpdate(mobileUser._id, {
                access_token : activationCode
            })

            res.status(200).json({
                message : "Reset link send your mobile"
            })
        }

    }catch (error) {

    }
}

export const activateAccount = async (req, res, next) => {

    try{

    const {token} = req.params;

    if(!token){
        next(createError(400, 'Token not Found'))
    }

    const tokenData = verifyToken(token);

    if (!tokenData){
        next(createError(400, 'Invalid url'))

    }else{

        const activate_user = await User.findById(tokenData.id);

        if (activate_user.isActivate == true){
           return next(createError(400,'User already activate'));

        }else{
            await User.findByIdAndUpdate(tokenData.id,{
                isActivate : true,
                access_token: null
            });

            res.status(200).json({
                message : "Account activate successfully"
            });
        }

    }

    }catch (error) {
        next(error)
    }
}

export const activateAccountByCode = async (req, res, next) => {
    try{

        const {code, email} = req.body;

        const user = await User.findOne().or([{'access_token' : code}, {'isActivate' : false},{email:email},{mobile:email}])

        if(!user){

           return next(createError(400,'Account activate fail'))

        }else{
            await User.findByIdAndUpdate(user._id,{
                isActivate : true,
                access_token : null
            });

            res.status(200).json({
                message : "Account activation successful"
            })
        }



    }catch (error) {
        next(error)
    }
}


export const deleteUser = async (req,res,next) => {
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user)
        
    } catch (error) {
        next(error)
    }
}


export const userLogin = async (req,res,next) => {

    try {
        const {auth, password} = req.body;


        if (!auth || !password){
            return next(createError(400,'All fields are require'))
        }

        if (isEmail(auth)) {
            const user = await User.findOne({email: auth});

            if (!user) {
                return next(createError(400, 'Invalid Email Address'))

            }

            if (user){
                if (!passwordCheck(password, user.password)) {
                    return next(createError(400, 'Wrong password'))

                } else {

                    const token = createToken({id: user._id}, '365d')

                    res.status(200).cookie('authToken', token).json({
                        message: "User Login Successful",
                        user: user,
                        token: token
                    })
                }
            }
        }


        if(isMobile(auth)) {

            const mobileUser = await User.findOne({email: auth});

            if (!mobileUser) {
                return next(createError(400, 'User not found'))
            }

            if (mobileUser) {
                if (!passwordCheck(password, mobileUser.password)) {
                    return next(createError(400, 'Wrong password'))

                } else {

                    const token = createToken({id: mobileUser._id}, '365d')

                    res.status(200).cookie('authToken', token).json({
                        message: "User Login Successful",
                        user: mobileUser,
                        token: token
                    })
                }
            }
        }
    } catch (error) {

        next(error)
    }
}


export const getUserLoggedIn = async (req, res, next) => {
    try{

        const bearer_token = req.headers.authorization;

        if (!bearer_token){
            next(createError(400, 'Token not found'))
        }

        if (bearer_token){
            const token = bearer_token.split(' ')[1];

            const user = verifyToken(token)

            if (!user){

                next(createError(400, 'User not found'))

            }else{

                const logged_in_user = await User.findById(user.id);

                res.status(200).json({
                    message: "User login successful",
                    user : logged_in_user
                })
            }
        }

    }catch (error) {
        next(error)
    }
}



export const forgotPassword = async (req, res, next) => {

    try{

        const { auth } = req.body;

        let emailData = null;
        let mobileData = null;
        if (isEmail(auth)){
            emailData = auth
        }

        if (isMobile(auth)){
            mobileData = auth
        }

        if (emailData){
            const emailCheck = await User.findOne({email:emailData})

            if (!emailCheck){
                return next(createError(400, 'Email user not found'))
            }

            if (emailCheck){
                res.status(200).cookie('findUser',JSON.stringify({
                    name : emailCheck.first_name + ' ' +emailCheck.sur_name,
                    email : emailCheck.email,
                    photo: emailCheck.photo
                }), { expires: new Date(Date.now() + 1000*60*30) }).json({
                    user : emailCheck,
                    message: "successful"
                })
            }
        }

        if (mobileData){
            const mobileCheck = await User.findOne({mobile:auth});

            if (!mobileCheck){
                return next(createError(400,'Mobile user not found'))
            }

            if (mobileCheck){
                res.status(200).cookie('findUser',JSON.stringify({
                    name : mobileCheck.first_name + ' ' +mobileCheck.sur_name,
                    mobile : mobileCheck.mobile,
                    photo: mobileCheck.photo
                }), { expires: new Date(Date.now() + 1000*60*30) }).json({
                    user :mobileCheck,
                    message: "successful"
                })
            }
        }

    }catch (error) {
        next(error)
    }

}

export const findForgotPasswordLink = async (req, res, next) => {
    const {auth} = req.body;


    try{

        let emailData = null;
        let mobileData = null;
        let emailUser;
        let mobileUser;

        if (isEmail(auth)){
            emailData = auth
            emailUser = await User.findOne({email: auth});
            if(!emailUser){
                next(createError(400,'Invalid email address'));
            }

        }else if(isMobile(auth)) {
            mobileData = auth
            mobileUser = await User.findOne({mobile: auth});
            if(!mobileUser){
                next(createError(400,'Invalid mobile number'));
            }
        }else{
            next(createError(400,'Invalid mobile or email address'))
        }


        if (emailData){
            const activationToken = createToken({ id: emailUser._id }, '30d')
            const activationCode = randomNumber(99999, 10000)
            // const passwordResetLink = `${process.env.APP_URL}/api/v1/user/forgot-password/action/${activationToken}`;

            sendPasswordResetEmail(emailUser.email,'Reset Password',{
                name : emailUser.first_name+" "+ emailUser.sur_name,
                code: activationCode
            });

            await User.findByIdAndUpdate(emailUser._id, {
                access_token : activationCode
            })

            res.status(200).cookie('pass-code', emailUser.email, { expires: new Date(Date.now() + 1000*60*30) }).json({
                message : "Reset link send your email"
            })
        }

        if (mobileData){
            const activationCode = randomNumber(99999, 10000)
            sendSms(mobileUser.mobile,`Hi ${mobileUser.first_name} ${mobileUser.sur_name}, Your otp code id ${activationCode}`)

            await User.findByIdAndUpdate(mobileUser._id, {
                access_token : activationCode
            })

            res.status(200).cookie('pass-code', mobileUser.mobile, { expires: new Date(Date.now() + 1000*60*30) }).json({
                message : "Reset link send your mobile"
            })
        }

    }catch (error) {

    }
}



export const checkForgotPasswordLink = async (req, res, next) => {
    const {auth, code} = req.body;

    try{

        if (isEmail(auth)){
            const emailUser = await User.findOne({email:auth});

            if (!emailUser){

                return next(createError(400,'Invalid Email address'))

            }else{

                if(emailUser.access_token != code){
                    return next(createError(400,'Invalid code'))
                }else{

                    res.status(200).cookie('userId',JSON.stringify(emailUser._id), { expires: new Date(Date.now() + 1000*60*30) }).json({
                        message : "You can change your password"
                    })
                }
            }

        }

        if (isMobile(auth)){
            const mobileUser = await User.findOne({mobile:auth});

            if(!mobileUser){
                return next(createError(400,'Invalide mobile number'))
            }else{
                if (mobileUser.access_token != code){
                    return next(createError(400,'Code not match'))
                }else{
                    res.status(200).cookie('userId', JSON.stringify(mobileUser._id), { expires: new Date(Date.now() + 1000*60*30) }).json({
                        message : "You can change your password"
                    })
                }
            }
        }



    }catch (error) {
        return next(error)
    }
}


export const changeForgotPassword = async (req, res, next) => {
    const { password, id } = req.body;
    try{

        const user = await User.findById(id);

        if (!user){
            return next(createError(400, 'Invalid user id'));
        }else{


            await User.findByIdAndUpdate(id,{
                password : hashPassword(password),
                access_token : null
            })

            res.status(200).json({
                message : "Password Change Successful"
            })

        }
        
    }catch (error) {
        next(error)
    }
}


export const userLogout = async (req, res, next) => {
        try{

            res.status(200).json({
                message: "logout Successful",
                user:null
            })


        }catch (error) {
            next(error)
        }
}

export const getAllUserData = async (req, res, next) => {
    try{

        const user = await User.find();

        res.status(200).json({
            user:user
        })

    }catch (error) {
        next(error)
    }
}


