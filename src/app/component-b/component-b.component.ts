import { Component, OnInit } from '@angular/core';
import { ProfilePictureService } from './../profile-picture.service'

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  profilePicture = 'none';

  constructor(private profilePictureService: ProfilePictureService) { }

  ngOnInit() {
    this.profilePictureService.getProfilePictureObservable().subscribe((pictureUrl)=>{
      this.profilePicture = pictureUrl;
    })
  }

}
