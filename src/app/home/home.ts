import { Component } from '@angular/core';
import { Button } from "../button/button";
import { Links } from "../links/links";

@Component({
  selector: 'app-home',
  imports: [Button, Links],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
