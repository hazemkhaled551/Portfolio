import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resum-accordien',
  imports: [],
  templateUrl: './resum-accordien.html',
  styleUrl: './resum-accordien.css'
})
export class ResumAccordien {
  accordionItem = input<any>();
}
