import express from "express";
import {userProfileUpdate, userFeaturedPhotoUpload} from "../controllers/userProfileController.js";
import multer from "multer";
import path from 'path';



const router = express.Router();

const __dirname = path.resolve();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'api/public/featured/'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'_'+file.originalname)
    }
})

const upload = multer({ storage: storage }).array("featured",10)




router.route('/profile-update/:id').put(userProfileUpdate)
router.route('/featured-photo-update/:id').post(upload, userFeaturedPhotoUpload)





export default router;