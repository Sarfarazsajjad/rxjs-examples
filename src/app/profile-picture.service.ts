import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureService {
  profilePicturesubject = new Subject<string>();
  
  constructor() { }

  getProfilePictureObservable(): Observable<string>{
    return this.profilePicturesubject.asObservable();
  }

}
