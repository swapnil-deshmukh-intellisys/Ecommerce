import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    this.checkCredentials();
  }
  checkCredentials() {

    if (!localStorage.getItem('token')) {
      localStorage.clear();
      this.router.navigate(['']);

    }
    setTimeout(v => {

      this.checkCredentials();
    }, 1000);
  }

}
