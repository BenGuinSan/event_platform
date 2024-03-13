import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Cached trong trường hợp không có kết nối mongoose thì nó là 1 object có conn, và promise rỗng
// Typescript có bảo mật kiểu dữ liệu và cached lúc này là kiểu dữ liệu bên thứ 3 là mongoose vì thế để sử dụng được cached cần phải
// sử dụng global as many để qua bảo mật của typescript
let cached = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn 

    // Kiểm tra Mongodb_uri nếu false thì báo lỗi 
    if(!MONGODB_URI) throw new Error ("MONGODB_URI is Missing")
    
    // Tạo promise kết nối đến db
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "evently",
        bufferCommands: false,
    })

    // Nhận giá trị promise là giá trị kết nối db
    cached.conn = await cached.promise;

    return cached.conn;
}

// Server actions
// connectToDatabase()...