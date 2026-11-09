# Understanding Access Modifiers in TypeScript OOP

## Introduction

OOP (Object-Oriented Programming) is a programming paradigm in which
objects are the building blocks of an application. Applications contain
multiple objects that work together.

Access modifiers control how class properties and methods can be
accessed from different parts of a program. TypeScript commonly uses
`public`, `private`, `protected`, and `readonly`.

## Detailed Explanation

### 1. `public`

The `public` modifier allows properties and methods to be accessed from
anywhere. It is the default access modifier in TypeScript, so you do not
need to write it explicitly.

### 2. `private`

The `private` modifier restricts access to a property or method to the
class in which it is declared. It cannot be accessed directly from
outside that class or from a subclass.

### 3. `protected`

The `protected` modifier allows a property or method to be accessed
inside the class where it is declared and inside its subclasses. It
cannot be accessed directly from outside the class hierarchy.

### 4. `readonly`

The `readonly` modifier prevents a property from being reassigned after
it has been initialized. A readonly property can be initialized when it
is declared or inside the constructor.

## Code Example

class Account {
  public owner: string;
  readonly id: number;
  private _balance: number;
  protected accountType: string;

  constructor(
    id: number,
    owner: string,
    balance: number,
    accountType: string
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    this.accountType = accountType;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public getBalance(): number {
    return this._balance;
  }
}

const account = new Account(1, "Ashik", 0, "Savings");

console.log(account.owner);       // Accessible
console.log(account.id);          // Accessible, but cannot be reassigned
console.log(account.getBalance()); // Access balance through a public method

// These direct accesses are not allowed:
// console.log(account._balance);
// console.log(account.accountType);
// account.id = 2;


In this example:

-   `owner` is public, so it can be accessed from anywhere.
-   `id` is readonly, so it cannot be reassigned after initialization.
-   `_balance` is private, so it can only be accessed inside the
    `Account` class.
-   `accountType` is protected, so it can be accessed inside `Account`
    and its subclasses.
-   `deposit()` and `getBalance()` are public methods that provide
    controlled access to the account balance.

## Conclusion

Access modifiers help developers write secure, organized, and
maintainable code. Using the appropriate modifier protects sensitive
data and controls how different classes interact with each other.
