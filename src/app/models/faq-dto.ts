export interface FaqItemsModel {
    id?: string; // Ajoutez un id si votre backend utilise MongoDB par exemple
    question: string;
    response: string;
    category?: string;  // ID de la catégorie si vous utilisez des relations
  }