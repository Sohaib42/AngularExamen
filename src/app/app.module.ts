import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import {FormsModule} from "@angular/forms";
import { AddOrdinateurComponent } from './components/add-ordinateur/add-ordinateur.component';
import { EditOrdinateurComponent } from './components/edit-ordinateur/edit-ordinateur.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailOrdinateurComponent } from './components/detail-ordinateur/detail-ordinateur.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    AddOrdinateurComponent,
    EditOrdinateurComponent,
    DetailOrdinateurComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
