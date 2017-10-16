import { Component } from '@angular/core';

declare var ethers: any;

@Component({
  selector: 'my-app',
  template: '<h1>My Ethereum Wallet run by Angular 4 with Electron</h1>'
})
export class AppComponent {

  ngOnInit(){

    let Wallet = ethers.Wallet;
    let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
    let mywallet = new Wallet(privateKey);
    console.log("Address: " + mywallet.address);
    console.log("privateKey: " + mywallet.privateKey);
    
    //Mnemonic Phrase
    let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
    let mwallet = Wallet.fromMnemonic(mnemonic);
    
    console.log("Address(mnemonic): " + mwallet.address);
    console.log("privateKey(mnemonic): " + mwallet.privateKey);

    //Brain Wallet
    let username = "support@ethers.io";
    let password = "password123";
    Wallet.fromBrainWallet(username, password).then(function(wallet) {
        console.log("Address(Brain): " + wallet.address);
        console.log("Private Key(Brain): " + wallet.privateKey);
        // "Address: 0x7Ee9AE2a2eAF3F0df8D323d555479be562ac4905"
    });
    

  }
 }
