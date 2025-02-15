import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) { }

  navigateToCreateBlog() {
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['/create_blog']);
    }
    else {
      // alert("Please Login to Continue");
      this.router.navigate(['/login']);
    }
  }
}
