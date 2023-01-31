import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  public id!: number;
  public channel$!: Observable<Channel>;

  constructor(
    private channelsService: ChannelsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.channel$ = this.channelsService.getChannelById(this.id);
    });
  }

  public action(channel: Channel): void {
    this.channelsService.update(channel).subscribe();
    this.router.navigate(['channels']);
  }
}
