
const User = require("../models/User"); 
const jwt = require("jsonwebtoken");


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};


exports.registerUser = async (req, res) => {

    const { fullName, email, password, profileImageUrl } = req.body;
    // validation check for missing fields

    if(!fullName || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try{
        const existingUser = await User.findOne({ email});

        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        });

        res.status(201).json({
            _id: user._id,
            user,
            token: generateToken(user._id),
        });
        
    }catch(err){

        res.status(500).json({ message:"error registering user", error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try{
        const user = await User.findOne({ email });

        if(!user|| (!await user.comparePassword(password))) {
            return res.status(400).json({ message: "invalid credintials" });
    }

    res.status(200).json({
        _id: user._id,
        user,
        token: generateToken(user._id),
    });}catch(err){

        res.status(500).json({ message:"error logging in user", error: err.message });
    }
};

exports.getUserInfo = async (req, res) => {
    try{
        const user = await User.findById(req.user._id).select("-password");
      if(!user){  res.status(404).json({message: "user not found"});}

      res.status(200).json(user);
      
    }catch(err){
        res.status(500).json({ message:"error getting user info", error: err.message });
    }
};
    