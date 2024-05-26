import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminFaqComponent } from './modules/admin/admin-faq/admin-faq.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AnnualComponent } from './modules/offers/annual/annual.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConceptComponent } from './modules/concept/concept.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CreateCategoryComponent } from './modules/admin/dialogs/create-category/create-category.component';
import { CreateFaqComponent } from './modules/admin/dialogs/create-faq/create-faq.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EditFaqComponent } from './modules/admin/dialogs/edit-faq/edit-faq.component';
import { FaqComponent } from './modules/faq/faq.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { ForumComponent } from './modules/forum/forum.component';
import { GoogleMapComponent } from './modules/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationsComponent } from './components/informations/informations.component';
import { LoginComponent } from './modules/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaymentComponent } from './modules/payment/payment.component';
import { RegisterComponent } from './modules/register/register.component';
import { SubscribeComponent } from './modules/subscribe/subscribe.component';
import { TrimonthlyComponent } from './modules/offers/trimonthly/trimonthly.component';
import { UniqueComponent } from './modules/offers/unique/unique.component';
import { BlogComponent } from './modules/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FaqComponent,
    SubscribeComponent,
    ConceptComponent,
    PaymentComponent,
    ContactComponent,
    ForumComponent,
    FooterComponent,
    HeaderComponent,
    AnnualComponent,
    InformationsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TrimonthlyComponent,
    UniqueComponent,
    GoogleMapComponent,
    AdminFaqComponent,
    EditFaqComponent,
    CreateFaqComponent,
    CreateCategoryComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSelectModule,
    MatSelectModule,
    MatExpansionModule,
    HttpClientModule,
    MatListModule,
    MatExpansionModule,
    NgxPayPalModule,
    AngularSvgIconModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
