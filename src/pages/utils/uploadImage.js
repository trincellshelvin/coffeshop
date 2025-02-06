const cloudinary = require('../config/cloudinary');

const uploadImage = async (imagePath) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath);
        console.log('Image URL:', result.url);
        return result.url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

module.exports = uploadImage;
