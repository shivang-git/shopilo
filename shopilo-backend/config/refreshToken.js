import jwt from 'jsonwebtoken';

export const GenerateRefreshToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"3d"})
}