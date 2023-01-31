import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { ChannelsRoutingModule } from './channels-routing.module';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageListChannelNameComponent } from './pages/page-list-channel-name/page-list-channel-name.component';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';

@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
    FormChannelComponent,
    PageListChannelNameComponent,
  ],
  imports: [CommonModule, ChannelsRoutingModule, NgbModule, SharedModule],
  exports: [PageListChannelNameComponent, PageListChannelsComponent, PageAddChannelComponent],
})
export class ChannelsModule {}
