import mongoose,{Types} from "mongoose";
import { ProductDocument } from "../types/products.type";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        lowercase: true,
        require:true
    },
    stock: {
        type: Number,
        default: 0,
        require: true,
    },
    images: {
        type: Array,
    },
    sizes: [{
        string: [Number, String]
    }],
    brandName: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    gender: {
        type: String,
        enum: ['men', "women"],
        requrie: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
    },
    subCategroy: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    color: {
        type: Array,
    },
    sale: {
        type: Number,
        default: 0
    },
    view: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    review: [{
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId }
    }],
    discount: {
        type: Number,
        default: 0
    },
    isBestSelling: {
        type: [mongoose.Schema.Types.ObjectId],
    }
}, {
    timestamps:true
});

export const productModel = mongoose.model<ProductDocument>('Products', productSchema);

// function addSizeToProduct(product: Product, size: string, sku: string): Product {
//   const existingSize = product.sizes.find((s) => Object.keys(s).includes(size));

//   if (existingSize) {
//     // Size already exists, update count and SKU
//     existingSize[size][0] += 10; // Assuming you want to increment count by 10
//     existingSize[size][1] = sku; // Update SKU to the latest one
//   } else {
//     // Size doesn't exist, add a new size
//     const newSize: Size = {
//       [size]: [10, sku],
//       ...(size === 'xs' ? { xl: [0, ''] } : { xs: [0, ''] }), // Initialize the other size with count 0
//     };

//     product.sizes.push(newSize);
//   }

//   return product;
// }

// // Example usage:
// const existingProduct: Product = {
//   productId: '123',
//   sizes: [
//     { xs: [10, 'sku1'], xl: [20, 'sku2'] },
//     // Add more size variations as needed
//   ],
// };

// const newSize = 'xl';
// const newSku = 'sku3';

// const updatedProduct = addSizeToProduct(existingProduct, newSize, newSku);
// console.log(updatedProduct);
