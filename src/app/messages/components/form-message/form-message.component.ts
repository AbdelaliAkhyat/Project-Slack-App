import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../models/message';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss'],
  providers: [DatePipe],
})
export class FormMessageComponent implements OnInit {
  @Input() public init!: Message;
  @Output() public submitted: EventEmitter<Message>;
  public form!: FormGroup;
  public channelId!: number;

  constructor(
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    public activatedRoute: ActivatedRoute,
    ){
    this.submitted = new EventEmitter();
    this.activatedRoute.params.subscribe((params) => {
          this.channelId = params['id'];

          console.log('SER', this.channelId);

        });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [this.init.text],
      createdDate: [this.init.createdDate],
      channelId: [this.init.channelId],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.form.value.createdDate = this.datepipe.transform(new Date(), 'dd/MM/yyyy H:mm:ss');
    this.form.value.channelId = Number(this.channelId);
    console.log("form", this.form.value);
    this.submitted.emit(this.form.value);
  }



 // public ShowValuesOfForm() {
  //   console.log("text", this.form.value.text);
  //   console.log("owner", this.form.value.owner);
  //   console.log("createdDate", this.form.value.createdDate);
  //   console.log("channelId", this.channelId);
  //   console.log("id", this.form.value.id);



  // @Input() public init!: Message;
  // @Output() public submitted: EventEmitter<Message>;
  // public form!: FormGroup;
  // public channelId!: number;

  // public messageId: number =0;
  // public messages$: Observable<Message[]>;
  // constructor(
  //   private messagesService: MessagesService,
  //   private activatedRoute: ActivatedRoute,
  //   private formBuilder: FormBuilder,
  //   public datepipe: DatePipe
  // ) {
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.channelId = params['id'];

  //     console.log('SER', this.channelId);

  //   });
  //   this.messages$ = this.messagesService.collection$;
  //   this.submitted = new EventEmitter();
  //   // this.form = new FormGroup({
  //   //   text: ['', ]
  //   // })
  // }

  // ngOnInit(): void {
  //   this.messageId++;
  //   this.form = this.formBuilder.group({
  //     text: [null, [Validators.required]],
  //     owner: ["Abdelali", [Validators.required]],
  //     createdDate: [null, [Validators.required]],
  //     channelId: this.activatedRoute.params.subscribe((params) => {
  //       this.channelId = params['id'];
  //     }),
  //     id: this.messageId,
  //   });

  //   // this.form = this.formBuilder.group({
  //   //   text: [this.init.text],
  //   //   owner: ["Abdelali", [this.init.owner]],
  //   //   createdDate: [null, [this.init.createdDate]],
  //   //   channelId: this.activatedRoute.params.subscribe((params) => {
  //   //     this.channelId = params['id'];
  //   //   }),
  //   //   id: [this.init.id],
  //   // });
  //   console.log('channelId', this.channelId);
  // }

  // public onSubmit(): void {
  //   this.form.value.channelId = Number(this.channelId);
  //   this.form.value.createdDate = this.datepipe.transform(new Date(), 'dd/MM/yyyy H:mm:ss');
  //   console.log("form", this.form.value);
  //   this.submitted.emit(this.form.value);
  //   this.ngOnInit();

  // }

  // public ShowValuesOfForm() {
  //   console.log("text", this.form.value.text);
  //   console.log("owner", this.form.value.owner);
  //   console.log("createdDate", this.form.value.createdDate);
  //   console.log("channelId", this.channelId);
  //   console.log("id", this.form.value.id);

  // }
  // public getIdOfChannel(id: number) {
  //   return id == this.channelId;
  // }
}
