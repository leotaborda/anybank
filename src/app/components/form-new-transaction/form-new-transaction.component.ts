import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TypeTransaction } from '../../models/transaction';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css',
})
export class FormNewTransactionComponent {
  transactionType = "";
  transactionValue = "";

  createdTransaction = output<Transaction>();

  onSubmit() {
    const transaction = new Transaction(
      this.transactionType as TypeTransaction,
      Number(this.transactionValue)
    );

    this.createdTransaction.emit(transaction);
    this.transactionType = "";
    this.transactionValue = "";
  }
}
