let Account = [{ "accountNumber": "45678912", "CardNumber": "4567890123456789", "PIN": "2001", "AccountBalance": 100 },
 { "accountNumber": "45678921", "CardNumber": "4567890123456798", "PIN": "2002", "AccountBalance": 200 },
  { "accountNumber": "45678913", "CardNumber": "4567890123456778", "PIN": "2003", "AccountBalance": 300 }, 
  { "accountNumber": "45678931", "CardNumber": "4567890123456787", "PIN": "2004", "AccountBalance": 400 },
   { "accountNumber": "45678941", "CardNumber": "4567890123456767", "PIN": "2005", "AccountBalance": 500}];
let choose=prompt("Enter the service (ATM or CDM)");
let get_card_num=prompt("Enter the Card Number:");
        let get_pin_num=prompt("Enter the PIN:");
        if(choose=="ATM"){
            Account.map((details)=>{

                 if(get_card_num==details.CardNumber && get_pin_num==details.PIN){
                    let get_withdraw_amt= prompt("Enter the amount:");
                    if((parseInt(get_withdraw_amt)>details.AccountBalance)){
                     console.log("Insufficient Balance");
                    }
                    else if((parseInt(get_withdraw_amt)>details.AccountBalance)<0){
                     console.log("Invalid Input");
                    }
                    else{
                    details.AccountBalance= details.AccountBalance- (parseInt(get_withdraw_amt));
                    console.log("Amout withdrawn:"+parseInt(get_withdraw_amt) );
                    console.log("Amout Balance:"+details.AccountBalance);}

                 }
            })}
        else if(choose=="CDM"){
            Account.map((details)=>{
                if(get_card_num==details.CardNumber && get_pin_num==details.PIN){
                   let get_withdraw_amt= prompt("Enter the amount:");
                   if((parseInt(get_withdraw_amt)>details.AccountBalance)<0){
                     console.log("Invalid Input");
                    }
                    else{details.AccountBalance= details.AccountBalance+(parseInt(get_withdraw_amt));
                     console.log("Amout withdrawn:"+parseInt(get_withdraw_amt) );
                     console.log("Amout Balance:"+details.AccountBalance);
                  }

                }
           })
        }