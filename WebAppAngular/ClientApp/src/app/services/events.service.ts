import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

import { Event } from '../models/event.model';

@Injectable()
export class EventsService {
  constructor(public http: Http) {
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post('events', event)
      .pipe
        (map((response: Response) => response.json())
      );
  }

  getEvents(): Observable<Event[]> {
    return this.http.get('events')
      .pipe
        (map((response: Response) => response.json())
      );
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get(`events/${id}`)
      .pipe
        (map((response: Response) => response.json())
      );
  }
}
