import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent {

  @Input() public title!: string;

  constructor() {
  this.title = 'Ohhhhh le joli title';
  console.log(this.title);
  }
}