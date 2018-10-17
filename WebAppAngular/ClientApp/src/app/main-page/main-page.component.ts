import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public testMas = [{ Name: "www", Cat: 22 }, { Name: "eee", Cat: 2223 }];
  constructor() { }

  public gridData: any[] = this.testMas;



  ngOnInit() {
  }
}
