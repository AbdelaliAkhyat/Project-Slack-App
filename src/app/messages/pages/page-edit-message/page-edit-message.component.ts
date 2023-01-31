import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-page-edit-message',
  templateUrl: './page-edit-message.component.html',
  styleUrls: ['./page-edit-message.component.scss'],
})
export class PageEditMessageComponent {
  public id!: number;
  public message$!: Observable<Message>;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    this.message$ = this.messagesService.getMessageById(this.id)
  });
  }

  ngOnInit(): void {}

  public action(message: Message): void {
    this.messagesService.update(message).subscribe(() => {
      this.router.navigate(['messages', this.activatedRoute.snapshot.paramMap.get("id")]);
    });
  }
}
