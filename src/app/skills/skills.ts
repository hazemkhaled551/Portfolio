import { Component } from '@angular/core';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-skills',
  imports: [Cards],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    {
      src: 'assets/images/image 1.svg',
      skill: 'Javascript',
    },
    {
      src: 'assets/images/image 2.svg',
      skill: 'Typescript',
    },
    {
      src: 'assets/images/image 3.svg',
      skill: 'Python',
    },
    {
      src: 'assets/images/image 4.svg',
      skill: 'PHP',
    },
    {
      src: 'assets/images/image 5.svg',
      skill: 'Next Js',
    },
    {
      src: 'assets/images/image 6.svg',
      skill: 'React',
    },
    {
      src: 'assets/images/image 6.svg',
      skill: 'React dom',
    },
    {
      src: 'assets/images/image 6.svg',
      skill: 'React Native',
    },
    {
      src: 'assets/images/image 7.svg',
      skill: 'Angular',
    },
    {
      src: 'assets/images/image 8.svg',
      skill: 'Laravel',
    },
    {
      src: 'assets/images/image 9.svg',
      skill: 'Figma',
    },
    {
      src: 'assets/images/image 10.svg',
      skill: 'Django',
    },
    {
      src: 'assets/images/image 11.svg',
      skill: 'Tailwind CSS',
    },
    {
      src: 'assets/images/image 12.svg',
      skill: 'Bootstrap',
    },
    {
      src: 'assets/images/image 13.svg',
      skill: 'jQuery',
    },
    {
      src: 'assets/images/image 14.svg',
      skill: 'Wordpress',
    },
  ];
}
