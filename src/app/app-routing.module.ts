import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdinateurComponent} from "./components/ordinateur/ordinateur.component";
import {AddOrdinateurComponent} from "./components/add-ordinateur/add-ordinateur.component";
import {EditOrdinateurComponent} from "./components/edit-ordinateur/edit-ordinateur.component";
import {DetailOrdinateurComponent} from "./components/detail-ordinateur/detail-ordinateur.component";


const routes: Routes = [
  {path: 'computers' , component: OrdinateurComponent},
  {path: 'addComputers', component: AddOrdinateurComponent},
  {path: 'editComputers/:id', component: EditOrdinateurComponent},
  {path: 'computers/:id', component: DetailOrdinateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
