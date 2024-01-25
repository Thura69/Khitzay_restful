import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDI_NAME, 
  api_key: process.env.CLOUDI_KEY, 
  api_secret: process.env.CLOUDI_SECRET
});


export const cloudinaryUploadImage = async (fileUpload: string) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileUpload, (err, result) => {
            resolve({
                url: result?.secure_url
            })
        })
    })
};