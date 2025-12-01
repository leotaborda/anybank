import { Component, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNewTransactionComponent } from './components/form-new-transaction/form-new-transaction.component';
import { Transaction } from './models/transaction';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  processTransaction(transaction: Transaction) {
    console.log(transaction);
  }
}
