import Document from '../models/Document.js';

export const socketHandler = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected', socket.id);

        // Join a document room for collaboration
        socket.on('joinDocument', (documentId) => {
            socket.join(documentId);
        });

        // Handle document edits
        socket.on('editDocument', async ({ documentId, content }) => {
            const document = await Document.findById(documentId);
            if (document) {
                document.content = content;
                document.version += 1;
                await document.save();

                io.to(documentId).emit('documentUpdated', document); // Broadcast update to room
            }
        });

        socket.on('disconnect', () => {
            console.log('User disconnected', socket.id);
        });
    });
};
