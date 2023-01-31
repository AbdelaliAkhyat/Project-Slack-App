import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {
  public close : boolean;

  constructor(){
    this.close = false;
  }

  public toggle(): void {
    // if (close == true) => close = false;
    // if (close == false) => close = true;

    this.close = !this.close
  }
}
