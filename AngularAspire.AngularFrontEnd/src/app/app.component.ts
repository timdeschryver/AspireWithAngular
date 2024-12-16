import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  weatherforecast$ = inject(HttpClient).get<
    {
      date: string;
      temperatureC: number;
      temperatureF: number;
      summary: string;
    }[]
  >('/api/weatherforecast');
}
