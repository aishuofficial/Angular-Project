// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomeComponent } from './components/home/home.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SharedDataService } from './admin/shared-data.service';
// // import { CountryService } from './services/country.service';
// import { AdminModule } from './admin/admin.module';



// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     FooterComponent,
//     HomeComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FontAwesomeModule,
//     AdminModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedDataService } from './admin/shared-data.service';
// import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // Remove AdminModule from imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

