import { FormControl, FormGroup } from '@angular/forms';

import { CategoryItemModel } from 'src/app/models/category-faq.dto';
import { CategoryService } from 'src/app/webservices/category-webservice';
import { Component } from '@angular/core';
import { FaqWebService } from 'src/app/webservices/faq-webservice';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

export interface Category {
  id: string;
  name: string;
}

@Component({
  selector: 'app-create-faq',
  templateUrl: './create-faq.component.html',
  styleUrls: ['./create-faq.component.css']
})
export class CreateFaqComponent {
  question: string = '';
  response: string = '';
  categoryId: string = '';
  categories: CategoryItemModel[] = [];
  faqForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateFaqComponent>,
    private categoryService: CategoryService,
    private faqWebService: FaqWebService
  ) {
    this.faqForm = new FormGroup({
      question: new FormControl(''),
      response: new FormControl(''),
      categoryId: new FormControl('')
    });
  }


  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: categories => this.categories = categories,
      error: err => console.error('Error loading categories:', err)
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCategoryChange(event: MatSelectChange): void {
    const categoryIdControl = this.faqForm.get('categoryId');
    if (categoryIdControl) {
      categoryIdControl.setValue(event.value);
    }
  }

  onSubmit(): void {
    if (this.faqForm.valid) {
      const formData = this.faqForm.value;
      console.log('Submitting form data:', formData);

      this.faqWebService.createFaq(formData).subscribe({
        next: (newFaq) => {
          console.log('FAQ created successfully:', newFaq);
          this.dialogRef.close(newFaq);
        },
        error: (error) => {
          console.error('Error creating FAQ:', error);
        }
      });
    } else {
      console.error('Form is not valid:', this.faqForm.errors);
    }
  }
}
