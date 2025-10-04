import { Component } from '@angular/core';
import { Points } from "../points/points";

@Component({
  selector: 'app-about',
  imports: [Points],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  points: string[] = [
    'Develop highly interactive Front end / User Interfaces for the web',
    'Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    'Integration of third party services such as AWS / Digital Ocean',
    'Integration of payment services such as M-Pesa and paypal etc',
  ];
}
