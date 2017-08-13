import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentsComponent } from './contents/contents.component';

const routes:Routes = [{
    path: '',
    children: []
},{
    path: 'contents',
    component: ContentsComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
