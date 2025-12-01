import { Component, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNewTransactionComponent } from './components/form-new-transaction/form-new-transaction.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');
}
