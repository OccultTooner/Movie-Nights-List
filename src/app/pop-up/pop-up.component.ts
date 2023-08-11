import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  userReview:
    {
      user: string;
      review: string;
    }[];
  ;
  link: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    theData: {
      user: string;
      review: string;
    }[];
    imbd: string;
  }, private dialogRef: MatDialog) {
    this.userReview = data.theData;
    this.link =data.imbd;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

}
