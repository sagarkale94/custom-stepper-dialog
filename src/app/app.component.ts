import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiTestServiceService } from './api-test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CustomDialodWithStepper';

  constructor(
    private route: Router,
    private apiTestService: ApiTestServiceService
    ){
  }

  ngOnInit() {
    this.route.navigate(['createTile']);
    /* this.apiTestService.getMockData('2020-02-02 10:00:00','2020-02-02 23:00:00').subscribe(resp => {
      console.log("Response",resp.Data);
    }); */
  }

}
