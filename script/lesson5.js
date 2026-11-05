let account = {
    accountName: "name",
    balance: 100,
    getAccountName () {
        return this.accountName
    },
    getBalance () {
        return this.balance
    },
    deposit (amount) {
        if (amount > 0) {
        this.balance = this.balance + amount    
        }
    },
    withdrawal (amount) {
        if (amount > 0 && amount <= this.balance) {
        this.balance = this.balance - amount    
        }
    }
};

function atm () {
    const message = parseFloat(
        prompt(
            "Select an option 1) Get account name 2) See balance  3) Make a deposit 4) Make a withdrawal"
        )
    );

    switch (message) {
        case 1:
            console.log(account.getAccountName());
            break
        case 2:
            console.log(account.getBalance());
            break
        case 3:
            const sum = parseFloat (
               prompt (
                 "How much would you like to deposit?"
                 ) 
            );
            account.deposit(sum)
            console.log(account.getBalance())
            break
        case 4:
            const total = parseFloat (
               prompt (
                 "How much would you like to withdraw?"
                 ) 
            );
            account.withdrawal(total)
            console.log(account.getBalance())
            break
    }
}

atm();