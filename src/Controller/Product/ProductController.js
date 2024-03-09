import productmodel from "../../Model/ProductModel/ProductModel.js";

const postProduct = async (req, res) => {
    try {
        console.log('enter');
        console.log(req.body.fit);
        const productMod = new productmodel({
            Tittle: req.body.Tittle,
            Desc: req.body.Desc,
            PriceList: req.body.PriceList,
            stock:req.body.stock,
            fit:req.body.fit
        });
        await productMod.save()
        res.status(200).send({ message: 'successfully product created' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getProduct=async(req,res)=>{
    try {
     let data=  await productmodel.find();
     res.status(200).send({message:'fetched successfully',data})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}


export default { postProduct ,getProduct}