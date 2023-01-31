import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-page-list-channels',
  templateUrl: './page-list-channels.component.html',
  styleUrls: ['./page-list-channels.component.scss'],
  providers: [NgbDropdownConfig],
})
export class PageListChannelsComponent {
  public channels$: Observable<Channel[]>;

  constructor(
    private channelsService: ChannelsService,
    private router: Router,
    config: NgbDropdownConfig
  ) {
    this.channels$ = this.channelsService.collection$;

    // NgbDropdownConfig for keep dorpdown open after click
    config.autoClose = false;
  }

  // Edit one channel + refresh page after edit
  public goToEdit(id: number) {
    console.log("id pour goToEdit", id);

    this.router.navigate(['channels/edit', id]);
  }

  // function for Delete one channel by id + refresh page after delete
  public goToDelete(id: number) {
    const response = confirm('Are you sure you want to delete?');
    if (response) {
      this.channelsService.deleteById(id).subscribe();
    } else {
      this.channelsService.refreshCollection();
    }
  }

  // function for navigate to the conversation page corresponds to the selected channel
  public goToPageMessageOfChannel(id: number) {
    this.router.navigate(['conversation', id]);
  }
}
