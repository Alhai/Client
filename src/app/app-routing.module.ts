import { RouterModule, Routes } from '@angular/router';

import { AdminFaqComponent } from './modules/admin/admin-faq/admin-faq.component';
import { AnnualComponent } from './modules/offers/annual/annual.component';
import { Article3Component } from './modules/article3/article3.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ConceptComponent } from './modules/concept/concept.component';
import { ContactComponent } from './modules/contact/contact.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FaqComponent } from './modules/faq/faq.component';
import { ForumComponent } from './modules/forum/forum.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './modules/register/register.component';
import { ShopComponent } from './modules/shop/shop.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { SubscribeComponent } from './modules/subscribe/subscribe.component';
import { TrimonthlyComponent } from './modules/offers/trimonthly/trimonthly.component';
import { UniqueComponent } from './modules/offers/unique/unique.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'concept', component: ConceptComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'annual', component: AnnualComponent },
  { path: 'trimonthly', component: TrimonthlyComponent },
  { path: 'unique', component: UniqueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-faq', component: AdminFaqComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article', component: Article3Component },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'shop', component: ShopComponent },




];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
