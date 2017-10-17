import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

declare var ethers: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

  protected form: FormGroup;
  private Address:string;
  private Balance:string;
  private Wallet :any;
  private providers :any;
  private provider :any;

  constructor(private fb: FormBuilder) {
    this.Createform();
    this.Wallet = ethers.Wallet;
    this.providers = ethers.providers
    this.provider = this.providers.getDefaultProvider();
    this.Balance = "";
  }

  ngOnInit() {
    
  }

  private Createform() {
    this.form = this.fb.group({
      myaddress: new FormControl(""),
      myphrase: new FormControl("radar blur cabbage chef fix engine embark joy scheme fiction master release"),
      username: new FormControl("support@ethers.io"),
      pwd: new FormControl("password123"),
      address: new FormControl(""),
      balance: new FormControl(""),
    });
  }

  private getMine() {
  
    let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123";
    let mywallet = new this.Wallet(privateKey);
    console.log("privateKey: " + mywallet.privateKey);
    //this.GetBalance(mywallet.address);
    this.GetBalance(mywallet.address);
   
  }

  private getM() {
    //Mnemonic Phrase
    let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
    let mwallet = this.Wallet.fromMnemonic(mnemonic);
  
    console.log("privateKey(mnemonic): " + mwallet.privateKey);
  
    this.GetBalance(mwallet.address);
    
  }

   //Brain Wallet
  private getBrian() {
    let username = "support@ethers.io";
    let password = "password123";
    
    this.Wallet.fromBrainWallet(username, password).then(wallet => {
      console.log("Private Key(Brain): " + wallet.privateKey);
      this.GetBalance(wallet.address);
    });

  }

  private GetBalance(address:any){
    this.form.controls["address"].patchValue(address)
    this.provider.getBalance(address).then( bal =>{
      // balance is a BigNumber (in wei); format is as a sting (in ether)
       this.Balance = ethers.utils.formatEther(bal);
       this.form.controls["balance"].patchValue(this.Balance)
      
    });
  }
}
