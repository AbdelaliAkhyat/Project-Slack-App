import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Message } from 'src/app/messages/models/message';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private urlApi: string;
  public collection$!: BehaviorSubject<Channel[]>;

  constructor(private HttpClient: HttpClient) {
    this.urlApi = environment.urlApi;

    this.collection$ = new BehaviorSubject<Channel[]>([]);

    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.HttpClient.get<Channel[]>(`${this.urlApi}/channels`).subscribe((data) =>
      this.collection$.next(data)
    );
  }

  public update(channel: Channel): Observable<Channel> {
    return this.HttpClient.put<Channel>(
      `${this.urlApi}/channels/${channel.id}`,
      channel
    ).pipe(
      tap(() => this.refreshCollection())
    );
  }

  public add(channel: Channel): Observable<Channel> {
    return this.HttpClient.post<Channel>(`${this.urlApi}/channels`, channel).pipe(
      tap(() => this.refreshCollection())
    );
  }

  // public getById(id: number): Observable<Channel> {
  //   return this.HttpClient.get<Channel>(`${this.urlApi}/channels/${id}`);
  // }

  public getChannelById(id: number): Observable<Channel> {
    return this.HttpClient.get<Channel>(`${this.urlApi}/channels/${id}`);
  }

  public deleteById(id: number): Observable<Channel> {
    return this.HttpClient.delete<Channel>(`${this.urlApi}/channels/${id}`).pipe(
      tap(() => this.refreshCollection())
    );
  }

}
