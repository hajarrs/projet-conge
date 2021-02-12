import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-conge';
/*
  public getUser():string | null{
    return sessionStorage.getItem('login');
  }

  user : string | null = this.getUser();

  constructor(private router: Router) {};
  public logout() {
    sessionStorage.removeItem('tokenId');
    sessionStorage.removeItem('login');
    this.user = '';
    this.router.navigate(['/login']);
  }
  */
}
