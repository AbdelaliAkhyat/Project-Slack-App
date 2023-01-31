import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from 'src/app/channels/models/channel';
import { ChannelsService } from 'src/app/channels/services/channels.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public channels$: Observable<Channel[]>;
  public headers: string[];

  constructor(
    private channelsService: ChannelsService,
    private router: Router
  ) {
    this.channels$ = this.channelsService.collection$;
    this.headers = [
      'channelName',
      'channelUser',
      'createdDate',
      'description',
      'Action',
    ];
  }

  public goToEdit(id: number) {
    this.router.navigate(['channels/edit', id]);
  }

  public goToDelete(id: number) {
    const response = confirm('Are you sure you want to delete?');
    if (response) {
      this.channelsService.deleteById(id).subscribe();
    } else {
      this.channelsService.refreshCollection();
    }
  }
}
