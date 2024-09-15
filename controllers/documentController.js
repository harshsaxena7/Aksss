import { createDocument, updateDocument, getDocumentById } from '../services/documentService.js';

export const createDocumentController = async (req, res) => {
    const { title } = req.body;
    const userId = req.user.id; // Extracted from JWT middleware
    try {
        const document = await createDocument(title, userId);
        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Error creating document' });
    }
};

export const updateDocumentController = async (req, res) => {
    const { content } = req.body;
    const { id: documentId } = req.params; // Get the document ID from URL params
    const userId = req.user.id; // Extracted from JWT middleware
    try {
        const updatedDocument = await updateDocument(documentId, content, userId);
        res.status(200).json(updatedDocument);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Error updating document' });
    }
};

export const getDocumentByIdController = async (req, res) => {
    const { id: documentId } = req.params;
    try {
        const document = await getDocumentById(documentId);
        if (!document) return res.status(404).json({ message: 'Document not found' });
        res.status(200).json(document);
    } catch (error) {
        res.status(400).json({ message: error.message || 'Error fetching document' });
    }
};
