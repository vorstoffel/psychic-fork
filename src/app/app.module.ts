import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartPlayComponent } from './start-play/start-play.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InventoryBarComponent } from './inventory-bar/inventory-bar.component';
import { Level1Component } from './levels/level1/level1.component';

const appRoutes: Routes = [
  { path: '', component: StartPlayComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'level1', component: Level1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InventoryBarComponent,
    Level1Component,
    StartPlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
