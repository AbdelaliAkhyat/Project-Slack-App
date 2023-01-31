import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-page-list-channel-name',
  templateUrl: './page-list-channel-name.component.html',
  styleUrls: ['./page-list-channel-name.component.scss'],
})
export class PageListChannelNameComponent {
  public id!: number;
  public channels$: Observable<Channel[]>;
  public channelName = Object.values(Channel);
  public channelId!: number;


  constructor(
    private channelsService: ChannelsService,
    private activatedRoute: ActivatedRoute,
  ) {

    // Get the id parameter in page route and assign it to channelId
    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['id'];
    });

    this.channels$ = this.channelsService.collection$;

  }

  // ngOnInit(): void {
  //   console.log("cbjbxjb", this.channelId);
  // }

  // function for display only the title of channelName corresponding to the conversation
  // without this function I will have all channels name displayed, because i use the for loop
  public isChannel (id: number) {
    return id == this.channelId;
  }
}
