import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-add-message',
  templateUrl: './page-add-message.component.html',
  styleUrls: ['./page-add-message.component.scss'],
})
export class PageAddMessageComponent {
  public message: Message;
  public id!: number;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.message = new Message();
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log('this.id', this.id);
    });
  }

  public action(message: Message): void {
    this.messagesService.add(message).subscribe();
    this.router.navigate(['conversation', this.id]);
    console.log('Affichage message', message);
  }


  // public message: Message;

  // constructor(private messagesService: MessagesService, private router : Router) {
  //   this.message = new Message();
  // }

  // public action(message: Message): void {
  //   this.messagesService.add(message).subscribe();
  //   this.router.navigate(['messages']);
  // }

  // public addOwner(message: Message): void {
  //   this.messagesService.add(message).subscribe();
  // }
}
