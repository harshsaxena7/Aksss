import { createMessage } from '../services/chatService.js';

export const sendMessage = async (req, res) => {
    const { content, documentId } = req.body;
    const senderId = req.user.id; // Extracted from JWT middleware
    const io = req.app.get('socketio'); // Accessing the Socket.IO instance

    try {
        const message = await createMessage(senderId, content, documentId);
        io.to(documentId).emit('newMessage', message); // Emit message to document room
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Error sending message' });
    }
};
