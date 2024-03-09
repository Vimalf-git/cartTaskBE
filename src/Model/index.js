import mongoose from "mongoose";

try {
    mongoose.connect(`mongodb+srv://vimal:VimalAdmin97@cluster.9dikmaf.mongodb.net/spanglecart`);
} catch (error) {
    console.log(`error occur in Db ${error}`);
}

export default mongoose