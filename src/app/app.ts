import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vacanciesboardcomponent } from './vacanciesboardcomponent/vacanciesboardcomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Vacanciesboardcomponent],
  template: `<app-vacanciesboardcomponent />`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectodemo');
}
