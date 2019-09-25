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
import { StartComponent } from './start/start.component';
import { InventoryBarComponent } from './inventory-bar/inventory-bar.component';
import { Level1Component } from './levels/level1/level1.component';

const appRoutes: Routes = [
  { path: 'welcome', component: StartComponent },
  { path: 'level1', component: Level1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InventoryBarComponent,
    Level1Component
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
