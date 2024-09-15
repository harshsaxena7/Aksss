import Message from '../models/Message.js';

export const createMessage = async (senderId, content, documentId) => {
    const newMessage = new Message({ sender: senderId, content, documentId });
    await newMessage.save();
    return newMessage;
};
