let account = {
    accountName: "name",
    balance: 100,
    getAccountName () {
        return this.accountName
    },
    getBalance () {
        return this.balance
    }
};

console.log(account.getAccountName());

function atm () {
    const message = parseFloat(
        prompt(
            "Select an option 1) Get account name 2) See balance  3) Make a deposit 4) Make a withdrawal"
        )
    );

    switch (message) {
        case 1:
            // get account name
        case 2:
            // see balance
        case 3:
            // make deposit
        case 4:
            // make a withdrawl
    }
}