import { registerUser, loginUser } from '../services/authService.js';

export const register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const token = await registerUser(username, password, role);
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(400).json({ message: error.message || 'Error registering user' });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await loginUser(username, password);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ message: error.message || 'Invalid credentials' });
    }
};
