import jwt from 'jsonwebtoken';
 const JWT_SECRET="e1f526f71cfd524872eb34bbdf6a8e6c4b12f7c02c98de12ae479ca08c4f7d1b"
export const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};
