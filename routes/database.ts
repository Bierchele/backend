import { scanner } from "../barcodeDevice";
interface Barcode {
  barcode: string;
}

const database: Array<Barcode> = scanner.memo;
export { database };
