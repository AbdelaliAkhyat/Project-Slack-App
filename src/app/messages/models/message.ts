import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  text!: string;
  owner!: string;
  createdDate!: Date;
  channelId!: number;
  id!: number;

}
