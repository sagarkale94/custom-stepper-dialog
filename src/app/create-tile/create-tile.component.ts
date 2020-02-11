import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomStepperDialogComponent } from '../custom-stepper-dialog/custom-stepper-dialog.component';

@Component({
  selector: 'app-create-tile',
  templateUrl: './create-tile.component.html',
  styleUrls: ['./create-tile.component.scss']
})
export class CreateTileComponent {

  isDialogOpen = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(){
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CustomStepperDialogComponent, {
      width: '95vw',
      height: '95vh',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
    });
  }

}
