import { Component } from '@angular/core';
import { ResumAccordien } from '../resum-accordien/resum-accordien';

@Component({
  selector: 'app-resum',
  imports: [ResumAccordien],
  templateUrl: './resum.html',
  styleUrl: './resum.css',
})
export class Resum {
  experience = [
    {
      id: 'ex1',
      title: 'Software Engineer',
      company: 'Weza Prosoft Limited',
      startDate: '2022',
      endDate: 'Present',
      desc: 'Create of web applications that maintains high standards of code quality and smart application design to ensure application performance, uptime, and scale.',
    },
    {
      id: 'ex2',
      title: 'Software Engineer',
      company: 'Paya Ventures Ltd (Paya Finance)',
      startDate: '2022',
      endDate: 'Present',
      desc: 'Create of web applications that maintains high standards of code quality and smart application design to ensure application performance, uptime, and scale.',
    },
    {
      id: 'ex3',
      title: 'Software Engineer',
      company: 'Moringa School',
      startDate: '2022',
      endDate: 'Present',
      desc: 'Create of web applications that maintains high standards of code quality and smart application design to ensure application performance, uptime, and scale.',
    },
    {
      id: 'ex4',
      title: 'Software Engineer',
      company: 'Brance Technologies',
      startDate: '2022',
      endDate: 'Present',
      desc: 'Create of web applications that maintains high standards of code quality and smart application design to ensure application performance, uptime, and scale.',
    },
  ];
  education = [
    {
      id: 'ed1',
      title: 'Software Development',
      company: 'Moringa School',
      startDate: '2021',
      endDate: '2021',
      desc:"Diligently attended software development courses,  advancing skills and knowledge. With this being a continuous improvement, got to learn to contribute effectively in software development roles."
    },
    {
      id: 'ed2',
      title: 'Software Development',
      company: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
      startDate: '2021',
      endDate: '2021',
      desc:"Diligently attended software development courses,  advancing skills and knowledge. With this being a continuous improvement, got to learn to contribute effectively in software development roles."
    },
  ];
}
