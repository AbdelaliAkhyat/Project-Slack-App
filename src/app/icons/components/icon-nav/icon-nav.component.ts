import { Component } from '@angular/core';
import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faXmark;
  }
}
