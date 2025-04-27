const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    icon: {
        type: String,
      },
      source: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
        required: true,
      },
}, {
    timestamps: true,
});

module.exports = mongoose.model("income", incomeSchema);
