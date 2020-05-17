class Bank{
    constructor(crnt, dposit, wdrawl){
        this.crnt = crnt;
        this.dposit = dposit;
        this.wdrawl = wdrawl;
    }

    deposit(){
      this.crnt = this.crnt + this.dposit;  
      // const current =document.getElementById('current').value = this.crnt;
      console.log(this.crnt);
      return this.crnt;
    }
    
    withdrawl(){
        this.crnt = this.crnt - this.wdrawl;
        const current =document.getElementById('current').value = this.crnt;
        return this.crnt;
    }
    showMessage(msg){
      let form = document.getElementById('form');
      let container = document.getElementById('cont-main');
      let div = document.createElement('div');
      div.classList.add('error');
      div.setAttribute('id', 'error');
      div.innerHTML = `<p>${msg}</p>`;
      container.insertBefore(div, form);
      setTimeout(() =>{
        document.getElementById('error').innerHTML="";}, 3000);
      }

      

    }








let form = document.getElementById('form');
const current =document.getElementById('current');
const deposit = document.getElementById('deposit');
const withdrawl = document.getElementById('withdrawl');
 form.addEventListener('submit', function(e){
    let crnt=Number(current.value);
    let dposit=Number(deposit.value);
     let wdrawl=Number(withdrawl.value);
     current.value = crnt;
     let o1 = new Bank(crnt, dposit, wdrawl);
     if( wdrawl!="" && dposit=="" && wdrawl<crnt){
     
     ;
       let temp =   o1.withdrawl();
      //  document.getElementById('current').value = Bank.withdrawl();
    }
    
    if(wdrawl>crnt)
   {
     let msg = "Insufficient balance";
     o1.showMessage(msg);
   
   
    }
      
      if(dposit!="" && wdrawl=="" ){
       
        o1.deposit();
        // document.getElementById('current').value = Bank.deposit();
      }


      e.preventDefault();
    });