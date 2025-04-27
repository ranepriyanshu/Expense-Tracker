// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs"); 


// const userSchema = new mongoose.Schema({
    
//     fullName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//     },
//     password: {
//         type: String,
//         required: true,
        
//     },


//     profileImageUrl: {
//         type: String,
//         default: null,
//     },
    
// }, {

//     timestamps: true    

// });


// // hash Password befor saving 

// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();

//     this.password = await bcrypt.hash(this.password, 10);
//     next();
 
//   });
  
//   // compare password

//   userSchema.method.comparePassword = async function (CandidatePassword) {
//     return await bcrypt.compare(CandidatePassword, this.password);
//   };

//   module.exports = mongoose.model("User", userSchema);



const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
