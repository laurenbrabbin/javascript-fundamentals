class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return (this.users).length;
  }

  getNames() {
  return this.users.map(this.getUserName);
  }

  getIntroductions() {
    return this.users.map(this.getUserIntrocution);
    }

  getUserName = (user) => {
    return user.getName();
  }

  getUserIntrocution = (user) => {
    console.log(`${user.getIntroduction()}\n`);
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

module.exports = UserBase;