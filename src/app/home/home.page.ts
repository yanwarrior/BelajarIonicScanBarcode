import { Component } from '@angular/core';

import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private barcodeScanner: BarcodeScanner
  ) {
    this.encodeData = "https://google.com";
    this.barcodeScannerOptions = {
      showFlipCameraButton: true,
      showTorchButton: true
    }
  }

  scanCode() {
    this.barcodeScanner.scan()
      .then(barcodeData => {
        alert("Barcode data berisi: " 
          + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(error => {
        console.log("Error", error);
      })
  }

  encodedText() {
    this.barcodeScanner.encode(
      this.barcodeScanner.Encode.TEXT_TYPE,
      this.encodeData
    )
    .then(
      encodedData => {
        console.log(encodedData);
        this.encodeData = encodedData;
      },
      error => {
        console.log("Error occured", error);
      }
    );
  }

}
