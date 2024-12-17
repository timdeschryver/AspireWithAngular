import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  private httpClient= inject(HttpClient);
  readonly weatherforecastResource = rxResource({
    loader: () => this.httpClient.get<WeatherForecast[]>(`/api/weatherforecast`)
  });

  protected refresh() {
    console.log('Reloading weather forecast');
    this.weatherforecastResource.reload();
  }

  protected throw() {
    throw Error('An error occurred!');
  }
}

type WeatherForecast = {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}