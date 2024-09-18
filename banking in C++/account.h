#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <iostream>
#include <string>

class BankAccount {
private:
    std::string accountHolder;
    double balance;
    int accountNumber;

public:
    BankAccount(std::string name, int accNumber) {
        accountHolder = name;
        accountNumber = accNumber;
        balance = 0.0;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "Deposit successful! Current balance: $" << balance << std::endl;
        } else {
            std::cout << "Invalid deposit amount." << std::endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            std::cout << "Withdrawal successful! Current balance: $" << balance << std::endl;
        } else {
            std::cout << "Invalid or insufficient funds for withdrawal." << std::endl;
        }
    }

    void checkBalance() const {
        std::cout << "Account Holder: " << accountHolder << std::endl;
        std::cout << "Account Number: " << accountNumber << std::endl;
        std::cout << "Current Balance: $" << balance << std::endl;
    }
};

#endif
