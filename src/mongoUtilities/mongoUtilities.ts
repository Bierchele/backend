import mongoose from "mongoose";

interface IBarcode {
    barcode: string;
    firstName: string;
    lastName: string;
    
  }

mongoose.connect("mongodb://mongo:27017/express-mongo", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, ()=>{
      console.log("connected to database")
  });
  


const barcodes = new mongoose.Schema({
    barcode: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    } 
})

const barcode = mongoose.model('barcodes', barcodes);

const build = (attr:IBarcode) => {
    return new barcode(attr)
}


export {build};
export {barcode};