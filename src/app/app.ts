import { Component, signal } from '@angular/core';
import { NavBar } from "./nav-bar/nav-bar";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Services } from "./services/services";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { Resum } from "./resum/resum";

@Component({
  selector: 'app-root',
  imports: [NavBar, Home, About, Services, Skills, Projects, Contact, Footer, Resum],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portoflio');
}
