import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChannelsModule } from '../channels/channels.module';
import { PageListChannelNameComponent } from '../channels/pages/page-list-channel-name/page-list-channel-name.component';
import { HomePageModule } from '../home-page/home-page.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { FormMessageComponent } from '../messages/components/form-message/form-message.component';
import { MessagesModule } from '../messages/messages.module';
import { TemplatesModule } from '../templates/templates.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChannelsModule,
    MessagesModule
  ],
  exports: [
    IconsModule,
    TemplatesModule,
    UiModule,
    LoginModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomePageModule,
    FormMessageComponent
  ],
})
export class CoreModule {}
