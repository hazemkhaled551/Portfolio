import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  navItems : string[] = ['Home', 'About', 'Services', 'Resume', 'Skills', 'Contact'];
}
