import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FaqItemsModel } from 'src/app/models/faq-dto';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.css']
})
export class EditFaqComponent {
  constructor(
    public dialogRef: MatDialogRef<EditFaqComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { faq: FaqItemsModel }
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
