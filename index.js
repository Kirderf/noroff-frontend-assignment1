let balance = 0;
let loan = 0;
let pay = 0;
function getLoan(){
    let loanPromt = prompt("Enter amount to loan");
    if((loan+loanPromt) < (balance-loan)*2){
        loan += Number(loanPromt);
        updateBalance();
    }else{
        alert("Loan rejected")
    }
}
function updateBalance(){
    document.getElementById("Balance").innerText = balance + loan;
}
function putBank(){
    if(loan > 0){
        loan -= pay*0.1;
        balance+= pay*0.9;
        pay = 0;
    }else if(loan == 0 && pay != 0){
        balance += pay;
        pay = 0;
    }else{
        alert("Nothing to payout")
    }
    updateBalance();
document.getElementById("Pay").innerText = 0;
    console.log("added to bank");
}

function doWork(){
    pay+=100;
    document.getElementById("Pay").innerText = pay;
    console.log("Worked and earned"+ pay);
}