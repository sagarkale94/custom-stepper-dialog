import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-stepper-dialog',
  templateUrl: './custom-stepper-dialog.component.html',
  styleUrls: ['./custom-stepper-dialog.component.scss']
})
export class CustomStepperDialogComponent implements OnInit {

  selectedMenuNo = 0;

  arrMenu = [
    {
      title: "Primary Info",
      no: 0,
      isLatestClicked: true
    },
    {
      title: "Filters",
      no: 1,
      isLatestClicked: false
    },
    {
      title: "Theme",
      no: 2,
      isLatestClicked: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(menuNo: number) {
    this.selectedMenuNo = menuNo;
    this.arrMenu.map((element) => {
      if(element.no == menuNo){
        element.isLatestClicked = true;
      }else{
        element.isLatestClicked = false;
      }
    });
  }

  onNextBtnClicked(){ 
    if(this.selectedMenuNo < (this.arrMenu.length - 1)){
      this.arrMenu[this.selectedMenuNo].isLatestClicked = false;
      this.selectedMenuNo++;
      this.arrMenu[this.selectedMenuNo].isLatestClicked = true;
    }
  }

  onBackBtnClicked(){
    if(this.selectedMenuNo > 0){
      this.arrMenu[this.selectedMenuNo].isLatestClicked = false;
      this.selectedMenuNo--;
      this.arrMenu[this.selectedMenuNo].isLatestClicked = true;
    }
  }

}
