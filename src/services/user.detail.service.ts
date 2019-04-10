import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/photo-detail/list/user.detail.model';

export class UserDetailService {

  constructor(private http: HttpClient) {
  }

  findPhotos(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
