import jwt from 'jsonwebtoken';

const generateJwtTokenAndSetCookie =  (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    })

    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000 ,//  15 days
        httpOnly:true, // prevents xss attack cross site scripting attacks
        sameSite:"strict", // helps protect against csrf attacks
        secure:process.env.NODE_ENV !== "develpment", // only set this to true if your app is behind https
    })
}

export default generateJwtTokenAndSetCookie;