import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../data-storage.service'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authServive: AuthService) { }

  ngOnInit(): void {
    this.authServive.user.subscribe((user) =>{
      this.isAuthenticated = !!user;
    })
    this.dataStorageService.fetchData();
  }
  
  onSave() {
    this.dataStorageService.storeData();

  }

  onFetch() {

    this.dataStorageService.fetchData();
  }
}
