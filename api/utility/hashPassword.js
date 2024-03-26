import bcrypt from "bcryptjs";


export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(12);
    const hash_password = bcrypt.hashSync(password, salt);

    return hash_password;
}


export const passwordCheck = (password, hashPass) => {
    return bcrypt.compareSync(password, hashPass);
}