import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  center = { lat: 45.18639338394715, lng: 5.754664211986604 };
  zoom = 15; // 34 semble très élevé pour un zoom, ajusté à 15
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  markers = [
    {
      position: {
        lat: 45.18639338394715,
        lng: 5.754664211986604
      },
      label: {
        color: 'blue',
        text: 'My digital school Grenoble',
      },
      title: 'Lieu spécifique',
      options: { animation: google.maps.Animation.DROP }
    }
  ];

  constructor() {
    this.apiLoaded = of(true);
  }

  ngOnInit() {}
}
