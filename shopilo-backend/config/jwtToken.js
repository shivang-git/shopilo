import jwt from 'jsonwebtoken';

export const GenerateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1 day"})
}