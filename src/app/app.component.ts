import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { LienService } from './lien.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public lienService: LienService) {}

  open(lien: string) {
    window.open(lien);
  }
}
