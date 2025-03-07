import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    namme: {typeof: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {typeof: String, required: true},
    creditBalance: { type: Number, default: 5 },
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;