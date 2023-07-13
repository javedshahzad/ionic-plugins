import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextToSpeachPage } from './text-to-speach.page';

const routes: Routes = [
  {
    path: '',
    component: TextToSpeachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextToSpeachPageRoutingModule {}
