import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprentice} from '../app/academy/apprentice.model';
import {Cohort} from '../app/academy/cohort.model';
import {User} from '../app/user/user-model';


@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  findUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  findUserById(id: number): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users' + id);
  }
}

