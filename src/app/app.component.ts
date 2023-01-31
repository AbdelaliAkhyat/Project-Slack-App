import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'testSlack';
  private subj$: Subject<any>;

  constructor(){
  this.subj$ = new Subject();
}

ngOnDestroy(): void {
  this.subj$.unsubscribe();
}


}
