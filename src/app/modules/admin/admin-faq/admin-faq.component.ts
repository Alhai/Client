import { Category, CreateFaqComponent } from '../dialogs/create-faq/create-faq.component';
import { Component, OnInit } from '@angular/core';

import { CategoryItemModel } from 'src/app/models/category-faq.dto';
import { CategoryService } from 'src/app/services/category-service';
import { CreateCategoryComponent } from '../dialogs/create-category/create-category.component';
import { EditFaqComponent } from '../dialogs/edit-faq/edit-faq.component';
import { FaqItemsModel } from 'src/app/models/faq-dto';
import { FaqService } from 'src/app/services/faq-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent implements OnInit {
  faqs: FaqItemsModel[] = [];
  categories: CategoryItemModel[] = [];
  constructor(private faqService: FaqService, public dialog: MatDialog, private categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.loadFaqs();
    this.loadCategories();
  }


  loadFaqs(): void {
    this.faqService.getAllFaqs().subscribe({
      next: (faqItem) => {
        console.log('Loaded categories:', faqItem); // Ajoutez ce log pour vérifier les données
        this.faqs = faqItem;
      },
      error: (error) => {
        console.error('Failed to load categories:', error);
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        console.log('Loaded categories:', categories); // Ajoutez ce log pour vérifier les données
        this.categories = categories;
      },
      error: (error) => {
        console.error('Failed to load categories:', error);
      }
    });
  }


  deleteFaq(id: string): void {
    this.faqService.deleteFaq(id).subscribe({
      next: () => this.faqs = this.faqs.filter(faq => faq.id !== id),
      error: (err) => console.error(err)
    });
  }

  CreateFaqModal(): void {
    const dialogRef = this.dialog.open(CreateFaqComponent, {
      width: '800px',
      height: 'auto',
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  EditFaqModal(faq: FaqItemsModel): void {
    const dialogRef = this.dialog.open(EditFaqComponent, {
      width: '400px',
      data: { faq: { ...faq } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.faqService.updateFaq(result.id, result).subscribe(() => this.loadFaqs());
      }
    });
  }

  CreateCategoryModal(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Assurez-vous que `result` contient les données nécessaires, par exemple un nom pour la catégorie
        const newCategory: CategoryItemModel = { name: result }; // Adaptez cette ligne selon le format de données attendu
        this.categoryService.createCategory(newCategory).subscribe({
          next: (newCategory) => {
            this.categories.push(newCategory); // Ajoute la nouvelle catégorie à la liste affichée
            this.loadCategories(); // Rechargez toutes les catégories si nécessaire
          },
          error: (err) => {
            console.error('Failed to create category:', err);
          }
        });
      }
    });
  }
}
