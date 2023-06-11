type Team = "red" | "blue" | "yellow";
type Health = 1 | 3 | 4;

type PlayerA = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: PlayerA = {
  nickname: "hamster",
  team: "red",
  health: 3,
};

// interface
interface PlayerB {
  nickname: string;
  team: Team;
  health: Health;
}

interface UserA {
  name: string;
  readonly nickname: string;
}
interface PlayerC extends UserA {}

const nicoA: PlayerC = {
  name: "nico",
  nickname: "hamster",
};

type User = {
  name: string;
  readonly nickname: string;
};
type PlayerD = User & {};

const nicoB: PlayerD = {
  name: "nico",
  nickname: "hamster",
};

abstract class UserB {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class PlayerE extends UserB {
  sayHi(name: string): string {
    return `Hello ${name}`;
  }
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

interface UserC {
  firstName: string;
  lastName: string;
  fullName(): string;
  sayHi(name: string): string;
}

interface Human {
  health: number;
}

class PlayerF implements UserC, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}

  fullName(): string {
    throw `Hello ${name}. My name is ${this.fullName()}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}`;
  }
}

const a = new PlayerF("hamster", "cute", 123);

interface AUser {
  firstName: string;
  lastName: string;
  fullName(): string;
  sayHi(name: string): string;
}

const makeUser = (user: AUser) => {
  return "HI";
};

makeUser({
  firstName: "hamster",
  lastName: "hi",
  fullName: () => "hamster",
  sayHi: (name) => "asdfa",
});

function Hamster(user: AUser): AUser {
  const x = {
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    sayHi: user.sayHi,
  };
  return x;
}

const c = {
  firstName: "hamster",
  lastName: "hi",
  fullName: () => "hamster",
  sayHi: (name) => "asdfa",
};

Hamster(c);
