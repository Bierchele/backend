interface Barcode {
  barcode: string;
}

class BarcodeScanner {
  private memo: Array<Barcode> = [];
  public postEntry = (barcode: string): void => {
    this.memo.push({ barcode: barcode });
  };
  public getEntries = (): Barcode[] => {
    return this.memo;
  };
}

const scanner = new BarcodeScanner();
export { scanner };
