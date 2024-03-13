// Model user là cấu trúc của đối tượng user trong mongoosedb.
// Có thể hiểu là bảng dữ liệu UserSchema có các thuộc tính được khai báo
import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    photo: {type: String, required: true},
})


const User = models.User || model('User', UserSchema);  

export default User;