export class Block{
  
    public timestamp   : string;
    public transactions: [];
    public previousHash: string;
    public hash        : string;
  
  constructor(timestamp, transactions, previousHash = ''){        
    this.timestamp     = timestamp;    
    this.transactions  = transactions;
    this.previousHash  = previousHash;
    this.hash          = this.calculateBlockHash();
  }
  calculateBlockHash(){
   	// need NPM crypto-js
   	return SHA256(
   		this.timestamp 
   		+ JSON.stringify(this.transactions) 
   		+ this.previousHash
    ).toString();
  }
  /* sign
  hasValidTransactions(){
    for (const Tx of this.transactions){
      if(!Tx.isValid()){ return false }
    }
    return true;
  }  // signature     */ 
}
