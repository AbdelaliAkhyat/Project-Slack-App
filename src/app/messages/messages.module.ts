import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChannelsModule } from '../channels/channels.module';
import { HomePageModule } from '../home-page/home-page.module';

import { SharedModule } from '../shared/shared.module';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { FormEditMessageComponent } from './components/form-edit-message/form-edit-message.component';

@NgModule({
  declarations: [
    PageListMessagesComponent,
    PageAddMessageComponent,
    PageEditMessageComponent,
    FormMessageComponent,
    FormEditMessageComponent,
  ],
  imports: [CommonModule, HomePageModule, ChannelsModule, MessagesRoutingModule, SharedModule],
  exports: [
    PageListMessagesComponent,
    PageAddMessageComponent,
    PageEditMessageComponent,
    FormMessageComponent,
    FormEditMessageComponent
  ],
})
export class MessagesModule {}
