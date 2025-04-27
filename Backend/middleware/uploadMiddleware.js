const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    });

const fileFilter = (req, file, cb) => {
    const allowedTypeds = ["image/jpeg", "image/jpg", "image/png"];
    if(allowedTypeds.includes(file.mimetype)){
        cb(null, true);
    }else{  
        cb(new Error("only jpg, jpeg, png are allowed"), false);
    }
};


const upload = multer({storage, fileFilter});

module.exports = upload;