import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Channel } from '../../models/channel';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss'],
  providers: [DatePipe]
})
export class FormChannelComponent implements OnInit {
  @Input() public init!: Channel;
  @Output() public submitted: EventEmitter<Channel>;
  public form!: FormGroup;
  public date!: Date;

  constructor(private formBuilder: FormBuilder, public datepipe: DatePipe) {
    this.submitted = new EventEmitter();
    console.log(this.init);
    this.date = new Date();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      channelName: [this.init.channelName],
      channelUser: [this.init.channelUser],
      createdDate: this.datepipe.transform(this.date, 'dd/MM/yyyy H:mm:ss'),
      description: [this.init.description],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
