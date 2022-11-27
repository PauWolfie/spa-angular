import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdyQuickComponent } from './bdy-quick/bdy-quick.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
