import { Component, OnInit } from '@angular/core';

import { CategoryItemModel } from 'src/app/models/category-faq.dto';
import { CategoryService } from 'src/app/webservices/category-webservice';
import { FaqItemsModel } from 'src/app/models/faq-dto';
import { FaqService } from 'src/app/webservices/faq-webservice';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  categories: CategoryItemModel[] = [];
  faqs: FaqItemsModel[] = [];
  selectedCategoryId?: string;

  constructor(private faqService: FaqService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCategorySelected(categoryId: string): void {
    this.selectedCategoryId = categoryId;
    this.faqService.getFaqsByCategoryId(categoryId).subscribe({
      next: (faqs) => {
        this.faqs = faqs; 
      },
      error: (error) => console.error('Error loading FAQs for category:', error),
      complete: () => console.log('FAQ loading complete for category')
    });
  }
}
