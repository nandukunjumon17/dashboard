import { Component, OnInit,ViewChild } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private module:AppModule) { }

  ngOnInit(): void {

  }

}
