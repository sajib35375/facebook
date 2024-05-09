import User from "../models/User.js";


export const userProfileUpdate = async (req, res, next) => {
    try{
        const {id} = req.params;
        const data = req.body;

        const user = await User.findByIdAndUpdate(id,data,{new:true})

       if (user){
           res.status(200).json({
               message : "Data updated successfully",
               user: user
           })
       }

    }catch (error) {
        next(error)
    }
}

export const userFeaturedPhotoUpload = async (req, res, next) => {
    try{
        const {id} = req.params;
        const data = req.body;

        let photos = [];
        req.files.forEach(item=>{
            photos.push(item.filename)
        })
        const user = await User.findById(id);

        const updateData = await User.findByIdAndUpdate(id,{featured:[...user.featured, photos]}, {new:true})

        if(updateData){
            res.status(200).json({
                message : "Featured photo uploaded successfully"
            })
        }
        
    }catch (error) {
        next(error)
    }
}

export const userProfilePhotoUpload = async (req, res, next) => {
    try{
        const {id} = req.params;

        await User.findByIdAndUpdate(id,{profile_photo:req.file.filename},{new:true})

        res.status(200).json({
            message:"Profile photo uploaded successfully",
            fileName:req.file.filename
        })

    }catch (error) {
        next(error)
    }
}