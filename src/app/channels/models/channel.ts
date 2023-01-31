import { ChannelI } from "../interfaces/channel-i";

export class Channel implements ChannelI{
  channelName!: string;
  channelUser!: string;
  createdDate!: Date;
  description!: string;
  id!: number;

  constructor(obj?: Partial<Channel>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
