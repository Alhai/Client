import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categoryName: string = '';  

  constructor(public dialogRef: MatDialogRef<CreateCategoryComponent>) {}

  onClick(): void {
    
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }
}
