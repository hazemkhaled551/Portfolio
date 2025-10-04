import { Component, input } from '@angular/core';

@Component({
  selector: 'app-points',
  imports: [],
  templateUrl: './points.html',
  styleUrl: './points.css',
})
export class Points {
  points  = input<String[]>();
}
