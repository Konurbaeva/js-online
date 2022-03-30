class BookSale {
    constructor() {
        this.amount = 1000; // US cents
        this.currency = "usd";
        this.isStudent = false;
    }

    applyStudentDiscount() {
        this.isStudent = true;
        this.amount = 800;
        return this;
    }

    setCurrency(currency) {
        this.currency = currency;
        return this;
    }

    applyPercentageDiscount(percent) {
        this.amount = this.amount - this.amount * percent / 100;
        return this;
    }
}

// Sample usage - do not modify
const bookSale = new BookSale;
bookSale.applyStudentDiscount().setCurrency("eur").applyPercentageDiscount(5);