const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // 1. Validate input
    if (!email || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // 2. Check duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // 3. Create user
    const newUser = await User.create({ email, username, password });

    // 4. Generate token
    const token = createSecretToken(newUser._id);

    // 5. Set cookie
    res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: false });

    // 6. Return success
    return res.status(201).json({ success: true, message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       httpOnly:true,
       sameSite:"none",
       secure:true
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
}