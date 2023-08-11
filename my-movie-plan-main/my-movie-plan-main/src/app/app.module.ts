import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GlobalConstants } from './commons/global-constants';
import { RegisterComponent } from './components/register/register.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuditoriumFormComponent } from './components/auditorium-form/auditorium-form.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ManageComponent } from './components/manage/manage.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ScreenComponent } from './components/templates/screen/screen.component';
import { ShowFormComponent } from './components/templates/show-form/show-form.component';
import { SelectMembersComponent } from './components/templates/select-members/select-members.component';
import { PaymentFormComponent } from './components/templates/payment-form/payment-form.component';
import { AddMovieToShowFormComponent } from './components/templates/add-movie-to-show-form/add-movie-to-show-form.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth/auth.service';
import { GlobalService } from './services/global/global.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { UserService } from './services/user/user.service';

import { SearchPipe } from './pipes/search.pipe';

import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';

const materialModules: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatChipsModule,
  MatAutocompleteModule
]

const templates: any[] = [
  SelectMembersComponent,
  ShowFormComponent,
  ScreenComponent,
  PaymentFormComponent,
  AddMovieToShowFormComponent
]

const components: any[] = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomePageComponent,
  MovieComponent,
  LoginComponent,
  LayoutComponent,
  RegisterComponent,
  LoginLayoutComponent,
  ForgotPasswordComponent,
  AboutUsComponent,
  ContactUsComponent,
  AuditoriumFormComponent,
  MovieFormComponent,
  ManageComponent,
  MoviesComponent,
  MyBookingsComponent,
  ProfileComponent,
  templates
]

const angularModules: any[] = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CommonModule
]

const services: any[] = [
  AuthService,
  GlobalService,
  UserService
]

const providers: any[] = [
  GlobalConstants,
  AuthGuard,
  AdminGuard,
  services
];

@NgModule({
  declarations: [components, SearchPipe],
  imports: [angularModules, materialModules, BrowserAnimationsModule],
  providers: [providers, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  // entryComponents: [templates]
})
export class AppModule { }
