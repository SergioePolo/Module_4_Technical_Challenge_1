import { Component, signal, inject, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  routerNav = inject(Router);
  isVisible: boolean = false;
  hiddenRoutes: string[] = ["/"];


  selectedRoutes() {
    this.routerNav.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isVisible = !this.hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }
  ngOnInit(): void {
    this.selectedRoutes()
  }
}
