import Document from '../models/Document.js';

export const createDocument = async (title, userId) => {
    const newDoc = new Document({ title, createdBy: userId });
    await newDoc.save();
    return newDoc;
};

export const updateDocument = async (docId, content, userId) => {
    const document = await Document.findById(docId);
    if (!document) throw new Error('Document not found');
    
    document.content = content;
    document.version += 1;
    await document.save();
    return document;
};

export const getDocumentById = async (docId) => {
    return await Document.findById(docId);
};
