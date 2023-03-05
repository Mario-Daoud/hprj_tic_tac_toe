import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [ngStyle]="{ 'background': gradientStart }"  *ngIf="!value">{{value}}</button>
    <button [ngStyle]="{ 'background': gradientX }" *ngIf="value == 'X'">{{value}}</button>
    <button [ngStyle]="{ 'background': gradientO }"  *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important;} button:hover { border: 2px solid white; }'
  ]
})
export class SquareComponent {
  gradientStart = 'linear-gradient(to bottom left,  #BDC3C7, #2C3E50)';
  gradientX = 'linear-gradient(to bottom right, #4CA1AF, #C4A0E5)';
  gradientO = 'linear-gradient(to bottom right, #FAACA8, #DDD6F3)';

  @Input() value!: string;
}

