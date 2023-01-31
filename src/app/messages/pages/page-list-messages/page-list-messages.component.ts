import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class PageListMessagesComponent {
  public message: Message;
  public id!: number;
  public messages$: Observable<Message[]>;
  public message$!: Observable<Message>;
  public channelId!: number;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    config: NgbModalConfig, private modalService: NgbModal
  ) {
    config.backdrop = 'static';
		config.keyboard = false;

    this.message = new Message();
    this.messages$ = this.messagesService.collection$;
    // Get the id parameter in page route and assign it to channelId
    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['id'];
    });
    // this.messages$ = this.messagesService.getMessageByChannelId(id);
    console.log('dzzz', this.message$);
  }

  public action(message: Message): void {
    this.messagesService.add(message).subscribe();
    this.router.navigate(['messages', this.channelId]);
  }

  public goToDelete(id: number) {
    const response = confirm('Are you sure you want to delete?');
    if (response) {
      this.messagesService.deleteById(id).subscribe();
    } else {
      this.messagesService.refreshCollection();
    }
  }

  public displayConversation(id: number): boolean {
    return this.channelId == id;
  }

  public goToEditMessage(id: number) {
    this.displayConversation(id);
    this.router.navigate(['messages', this.channelId]);
  }

  open(content: any) {

		this.modalService.open(content);
	}

  updateMessage(id:number) {
    const link = ['updateMessage', id];
    this.router.navigate(['messages', id])
  }

  // public goToEditMessage(id: number) {
  //   this.open(content);
  //   this.router.navigate(['messages', id]);
  // }

  // open(content: any) {
	// 	this.modalService.open(content);
	// }
}






