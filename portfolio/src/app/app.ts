import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Navbar } from "./pages/navbar/navbar";
import { Sobre } from "./pages/sobre/sobre";
import { Projetos } from "./pages/projetos/projetos";
import { Estudos } from "./pages/estudos/estudos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Navbar, Sobre, Projetos, Estudos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}