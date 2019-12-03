import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { StartPlayComponent } from './start-play/start-play.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InventoryBarComponent } from './inventory-bar/inventory-bar.component';
import { EmptyInventoryDialogComponent } from './empty-inventory-dialog/empty-inventory-dialog.component';
import { Level1Component } from './levels/level1/leve1.component';
import { Level2Component } from './levels/level2/level2.component';
import { LevelService } from './services/level.service';

const appRoutes: Routes = [
  { path: '', component: StartPlayComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'level1', component: Level1Component },
  { path: 'level2', component: Level2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InventoryBarComponent,
    Level1Component,
    StartPlayComponent,
    EmptyInventoryDialogComponent,
    Level2Component
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
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    MatChipsModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    EmptyInventoryDialogComponent
  ],
  providers: [{
    multi: true,
    provide: APP_INITIALIZER,
    useFactory: initLevelService,
    deps: [LevelService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initLevelService(levelService: LevelService) {
  return () => {
    levelService.storage = localStorage;
    return true;
  };
}
