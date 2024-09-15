import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true }
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
