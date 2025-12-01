import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNewTransactionComponent } from './components/form-new-transaction/form-new-transaction.component';
import { Transaction, TypeTransaction } from './models/transaction';
import { StatementComponent } from "./components/statement/statement.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent, StatementComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  transactions = signal<Transaction[]>([]);
  currentBalance = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      switch (currentTransaction.type) {
        case TypeTransaction.DEPOSIT:
          return acc + currentTransaction.value;
        case TypeTransaction.WITHDRAWAL:
          return acc - currentTransaction.value;
        default:
          throw new Error('Tipo de transação inválida!');
      }
    }, 0);
  });

  processTransaction(transaction: Transaction) {
    this.transactions.update((currentList) => [transaction, ...currentList]);
    console.log(this.transactions());
  }
}
