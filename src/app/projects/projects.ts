import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Button } from "../button/button";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, Button],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      img: 'assets/images/project 1.png',
      projectName: 'Website',
      title: 'Mount Kenya Wildlife Conservancy',
      description:
        'A non-profit trust dedicated to preserving the environment and the wildlife within.',
      link: '#',
    },
    {
      img: 'assets/images/project 2.svg',
      projectName: 'Mobile Application (IOS, Android)',
      title: 'Third African Congress on Conservation Agriculture (3ACCA)',
      description:
        'A Congress for building a Resilient Future in Africa through Conservation Agriculture and Sustainable Mechanisation.',
      link: '#',
    },
    {
      img: 'assets/images/project 3.svg',
      projectName: 'Mobile Application (IOS, Android)',
      title: 'Paya',
      description:
        'Paya lets you open a bank account in minutes and send money to anyone in seconds. Pay bills, make purchases, and transfer money with the Paya app.',
      link: '#',
    },
    {
      img: 'assets/images/project 4.svg',
      projectName: 'Website',
      title: 'QNET Say NO! campaign',
      description:
        'A website to mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.',
      link: '#',
    },
    {
      img: 'assets/images/project 5.svg',
      projectName: 'Web Application',
      title: 'The Newmark Group Limited',
      description:
        'A leading African Integrated Marketing Communications (IMC) firm that ranks among the fastest growing with a strong presence in the Multinational Brand segment of the market. ',
      link: '#',
    },
  ];
}
