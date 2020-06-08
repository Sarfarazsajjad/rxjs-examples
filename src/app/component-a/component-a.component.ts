import { Component, OnInit } from '@angular/core';
import { ProfilePictureService } from '../profile-picture.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  profilePicture = 'none';

  updatePicture(){
    this.profilePicture = 'picture1.png'
    this.profilePictureService.profilePicturesubject.next(this.profilePicture);
  }
  constructor(private profilePictureService: ProfilePictureService) { }

  ngOnInit() {
  }

}
