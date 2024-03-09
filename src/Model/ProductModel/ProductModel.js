import mongoose from "../index.js";

const productSchema = new mongoose.Schema({
    Tittle: String,
    Desc: String,
    PriceList: [
        { price: String, size: String }
    ],
    stock: String,
    fit: Array
}, {
    versionKey: false
})

const productmodel = mongoose.model('productModel', productSchema);

export default productmodel;