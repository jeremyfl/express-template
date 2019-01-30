class User {
  constructor(bornDate) {
    this.bornDate = bornDate;
    this.currentYear = 2019;
  }

  name() {
    return "Jeremy";
  }

  isUserGay() {
    return false;
  }

  age() {
    if (this.isUserGay()) {
      return "Just die already";
    }

    return this.currentYear - this.bornDate;
  }
}

module.exports = User;
