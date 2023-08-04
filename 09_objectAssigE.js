
sbiBank = {
    bankName: "State Bank of India",
    location: "Katraj",
    accountNo: "34338608008",
    ifsc: "SBIN0000283",
    interestRate: 9.5,
    showDetails: function(){
        console.log(`Data members of SBI Bank are: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
console.table(sbiBank);
sbiBank.showDetails();

axisBank = {
    bankName: "Axis Bank",
    location: "Wakad",
    accountNo: "34907690993",
    ifsc: "AXIS0000155",
    interestRate: 8.5,
    showDetails: function(){
        console.log(`Data members of SBI Bank are: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
console.table(axisBank);
axisBank.showDetails();

hdfcBank = {
    bankName: "HDFC Bank",
    location: "Swargate",
    accountNo: "3433128865",
    ifsc: "HDFCS0000990",
    interestRate: 9,
    showDetails: function(){
        console.log(`Data members of SBI Bank are: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
console.table(hdfcBank);
hdfcBank.showDetails();

yesBank = {
    bankName: "Yes Bank",
    location: "Loni",
    accountNo: "61843264550",
    ifsc: "YES0000355",
    interestRate: 7.5,
    showDetails: function(){
        console.log(`Data members of SBI Bank are: ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
console.table(yesBank);
yesBank.showDetails();


