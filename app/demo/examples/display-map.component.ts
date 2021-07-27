import { Component } from '@angular/core';

@Component({
  template: `
    <mgl-map
      [style]="'mapbox://styles/mapbox/streets-v9'"
      [zoom]="[12]"
      [center]="[1079.6282, 39.441]"
    >
    </mgl-map>
  `,
  styleUrls: ['./examples.css']
})
export class DisplayMapComponent {}
