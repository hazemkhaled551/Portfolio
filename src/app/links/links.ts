import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  imports: [],
  templateUrl: './links.html',
  styleUrl: './links.css',
})
export class Links {
  links: string[] = ['fab fa-facebook', 'fab fa-twitter', 'fab fa-linkedin', 'fab fa-github'];
}
