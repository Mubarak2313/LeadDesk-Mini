const jwt = require("jsonwebtoken")
const login = async (req, res) => {
    const { email, password } = req.body;

    if(
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
    ){
        return res.status(401).json({
            message: "Invalid Email or Password"
        })
    }
    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn:  "1d"}
    )
    res.status(200).json({
        message:"Login Successful",
        token,
    })
}
module.exports = { login };