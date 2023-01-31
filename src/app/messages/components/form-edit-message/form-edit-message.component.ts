import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-form-edit-message',
  templateUrl: './form-edit-message.component.html',
  styleUrls: ['./form-edit-message.component.scss'],
  providers: [DatePipe],
})
export class FormEditMessageComponent {

  @Input() public init!: Message;
  @Output() public submitted: EventEmitter<Message>;
  public form!: FormGroup;
  public channelId!: number;

  public messages$: Observable<Message[]>;
  public id!: number;

  constructor(
    private messagesService: MessagesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router : Router,
    public datepipe: DatePipe
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['id'];
    });
    this.messages$ = this.messagesService.collection$;
    this.submitted = new EventEmitter();
    console.log(this.init);
    // this.form = new FormGroup({
    //   text: ['', ]
    // })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['id'];
    });
    this.form = this.formBuilder.group({
      text: [null, [Validators.required]],
      owner: ["Abdelali", [Validators.required]],
      createdDate: [null, [Validators.required]],
      channelId: this.activatedRoute.params.subscribe((params) => {
        this.channelId = params['id'];
      }),
    //   text: [this.init.text],
    //   owner: [this.init.owner],
    //   createdDate: [this.init.createdDate],
    //   channelId: [this.init.channelId],
    //   id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.form.value.channelId = Number(this.channelId);
    console.log("form", this.form.value);
    this.submitted.emit(this.form.value);
    this.ngOnInit();

  }

  // public conversationOfChannel(id: number) {
  //   return id == this.channelId;
  // }

    updateMessage(message: Message) {
    this.messagesService.update(message).subscribe();
    this.router.navigate(['messages']);
  }


}
