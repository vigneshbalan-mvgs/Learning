#include <iostream>
#include "account.h"

int main() {
    std::string name;
    int accountNumber, choice;
    double amount;

    // Create a new account
    std::cout << "Welcome to Simple Bank!" << std::endl;
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);
    
    std::cout << "Enter an account number: ";
    std::cin >> accountNumber;

    BankAccount account(name, accountNumber);
    
    do {
        std::cout << "\n----- Banking Menu -----\n";
        std::cout << "1. Deposit Money\n";
        std::cout << "2. Withdraw Money\n";
        std::cout << "3. Check Balance\n";
        std::cout << "4. Exit\n";
        std::cout << "Choose an option: ";
        std::cin >> choice;

        switch (choice) {
            case 1:
                std::cout << "Enter deposit amount: ";
                std::cin >> amount;
                account.deposit(amount);
                break;

            case 2:
                std::cout << "Enter withdrawal amount: ";
                std::cin >> amount;
                account.withdraw(amount);
                break;

            case 3:
                account.checkBalance();
                break;

            case 4:
                std::cout << "Thank you for banking with us!" << std::endl;
                break;

            default:
                std::cout << "Invalid option. Please try again." << std::endl;
        }
    } while (choice != 4);

    return 0;
}
