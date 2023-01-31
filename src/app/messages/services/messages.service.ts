import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$!: BehaviorSubject<Message[]>;

  constructor(
    private HttpClient: HttpClient,
  ) {
    this.urlApi = environment.urlApi;

    this.collection$ = new BehaviorSubject<Message[]>([]);

    this.refreshCollection();

  }

  public refreshCollection(): void {
    this.HttpClient.get<Message[]>(`${this.urlApi}/messages`).subscribe(
      (data) => this.collection$.next(data)
    );
  }

  // public getMessageByChannelId(conversationId: number): Observable<Message[]> {
  //   console.log("ide", conversationId);

  //   return this.HttpClient.get<Message[]>(
  //     `${this.urlApi}/messages?channelId=${conversationId}`
  //   );
  // }

  public update(message: Message): Observable<Message> {
    return this.HttpClient.put<Message>(
      `${this.urlApi}/messages/${message.id}`,
      message
    ).pipe(tap(() => this.refreshCollection()));
  }

  public add(message: Message): Observable<Message> {
    return this.HttpClient.post<Message>(
      `${this.urlApi}/messages`,
      message
    ).pipe(tap(() => this.refreshCollection()));
  }

  public deleteById(id: number): Observable<Message> {
    return this.HttpClient.delete<Message>(
      `${this.urlApi}/messages/${id}`
    ).pipe(tap(() => this.refreshCollection()));
  }

  public getMessageById(id: number): Observable<Message> {
    return this.HttpClient.get<Message>(`${this.urlApi}/messages/${id}`);
  }
}
