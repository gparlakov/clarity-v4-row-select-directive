import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import '@clr/icons';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: GridComponent,
      },
      {
        path: 'grid',
        component: GridComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ]),
  ],
  declarations: [AppComponent, FormComponent, GridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
