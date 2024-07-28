import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public microFrontendUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.microFrontendUrl = this.sanitizer.bypassSecurityTrustUrl('');
  }

  menuItems = [
    {title: 'Clients', url: 'http://localhost:8081'},
    {title: 'Drones', url: 'http://localhost:8083'},
    {title: 'Delivering', url: 'http://localhost:8087'}
  ];

  public openMicroFront(url: string): void {
    this.microFrontendUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
