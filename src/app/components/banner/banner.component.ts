import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeComponent } from "./welcome/welcome.component";
import { AccountComponent } from "./account/account.component";

@Component({
  selector: 'app-banner',
  imports: [DatePipe, WelcomeComponent, AccountComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  today = new Date();
}
