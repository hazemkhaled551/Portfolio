import { Component } from '@angular/core';
import { Cards } from "../cards/cards";

@Component({
  selector: 'app-services',
  imports: [Cards],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  
  services = [
    {
      icon: "fa fa-cogs",
      title: "Web Development",
      description: "I can build and maintain your website, from front-end to back-end, ensuring a seamless user experience."
    },
    {
      icon: "fa fa-mobile",
      title: "App Development",
      description: "I develop high-performance mobile applications for iOS and Android, tailored to your business needs."
    },
    {
      icon: "fa fa-desktop",
      title: "UI/UX Design",
      description: "I create intuitive and visually appealing user interfaces that enhance user satisfaction and engagement."
    },
    {
      icon: "fa fa-desktop",
      title: "UI/UX Design",
      description: "I create intuitive and visually appealing user interfaces that enhance user satisfaction and engagement."
    },
    {
      icon: "fa fa-desktop",
      title: "UI/UX Design",
      description: "I create intuitive and visually appealing user interfaces that enhance user satisfaction and engagement."
    },
    {
      icon: "fa fa-line-chart",
      title: "Digital Marketing",
      description: "I help businesses grow their online presence through effective SEO, social media, and content marketing strategies."
    }
  ];

}
