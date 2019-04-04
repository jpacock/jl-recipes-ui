import {NgModule} from '@angular/core';

import {
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
} from '@angular/material'

@NgModule({
  imports: [
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
