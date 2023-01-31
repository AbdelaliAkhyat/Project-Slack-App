import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss']
})
export class PageAddChannelComponent {
  public channel: Channel;

  constructor(private channelsService: ChannelsService, private router : Router) {
    this.channel = new Channel();
  }

  public action(channel: Channel): void {
    this.channelsService.add(channel).subscribe();
    this.router.navigate(['home']);
  }
}
