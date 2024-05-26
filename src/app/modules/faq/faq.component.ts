import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category-service';
import { FaqService } from 'src/app/services/faq-service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  categories: any[] = [];
  faqs: any[] = [];
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
    this.selectedCategoryId = categoryId; // Assurez-vous que cette ligne est atteinte avec un ID correct
    this.faqService.getFaqsByCategoryId(categoryId).subscribe({
      next: (faqs) => {
        this.faqs = faqs; // Assurez-vous que les FAQs sont filtrées et retournées
      },
      error: (error) => console.error('Error loading FAQs for category:', error),
      complete: () => console.log('FAQ loading complete for category')
    });
  }
}
