import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

declare var ethers: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

  protected form: FormGroup;
  private myaddress:string;
  private wbalance:string;
  private Wallet :any;
  private providers :any;
  private provider :any;

  constructor(private fb: FormBuilder) {
    this.Createform();
    this.Wallet = ethers.Wallet;
    this.providers = ethers.providers
    this.provider = this.providers.getDefaultProvider();
    this.wbalance = "";
  }

  ngOnInit() {
/*
    let Wallet = ethers.Wallet;
    let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
    let mywallet = new Wallet(privateKey);
    console.log("Address: " + mywallet.address);
    console.log("privateKey: " + mywallet.privateKey);
*/
    
  }

  private Createform() {
    this.form = this.fb.group({
      myaddress: new FormControl(""),
      myphrase: new FormControl(""),
      username: new FormControl(""),
      pwd: new FormControl(""),
      balance: new FormControl(""),
    });
  }

  private getMine() {
  
    let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
    let mywallet = new this.Wallet(privateKey);
    console.log("Address: " + mywallet.address);
    console.log("privateKey: " + mywallet.privateKey);
    //this.GetBalance(mywallet.address);

    this.provider.getBalance(mywallet.address).then(function(bal){
      // balance is a BigNumber (in wei); format is as a sting (in ether)

       //this.wbalance 
       var etherString = ethers.utils.formatEther(bal);
       console.log("Balance: " + etherString);
    }(this));

  }

  private getM() {
    //Mnemonic Phrase
    let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
    let mwallet = this.Wallet.fromMnemonic(mnemonic);
    console.log("Address(mnemonic): " + mwallet.address);
    console.log("privateKey(mnemonic): " + mwallet.privateKey);
  
    //this.GetBalance(mwallet.address);
    let mproviders = ethers.providers
    let mprovider = mproviders.getDefaultProvider();

    mprovider.getBalance(mwallet.address).then( b => {
      var etherString = ethers.utils.formatEther(b);
      console.log("Balance: " + etherString);
       this.wbalance = etherString;
    })
  }

   //Brain Wallet
  private getBrian() {
    let username = "support@ethers.io";
    let password = "password123";
    
    this.Wallet.fromBrainWallet(username, password).then(wallet => {
      console.log("Address(Brain): " + wallet.address);
      console.log("Private Key(Brain): " + wallet.privateKey);
      // "Address: 0x7Ee9AE2a2eAF3F0df8D323d555479be562ac4905"
      this.GetBalance(wallet.address);
    });

  }

  private GetBalance(address:any){
    this.provider.getBalance(address).then( bal =>{
      // balance is a BigNumber (in wei); format is as a sting (in ether)

       this.wbalance = ethers.utils.formatEther(bal);
       console.log("Balance: " + this.wbalance);
    });
  }
}
