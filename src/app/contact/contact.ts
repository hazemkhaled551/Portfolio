import { Component } from '@angular/core';
import { Points } from '../points/points';
import { Links } from '../links/links';
import { Button } from "../button/button";

@Component({
  selector: 'app-contact',
  imports: [Points, Links, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  points: string[] = [
    '5+ Years of Experience',
    'Professional Web Designer',
    'Mobile Apps Design',
    'Technical Mentor',
    'Fullstack Developer',
  ];

  inputs = [
    {
      type: 'text',
      name: 'full Name',
      placeholder: 'Tery Humfy D. Tawez',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'teryy@humfy.org',
    },
    {
      type: 'text',
      name: 'phone',
      placeholder: '+821 (123) 45678',
    },
    {
      type: 'text',
      name: 'subject',
      placeholder: 'subject',
    },
  ];
}
