import { Component, OnInit } from '@angular/core';
import {Ordinateur} from "../../models/ordinateur";
import {OrdinateurService} from "../../services/ordinateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent implements OnInit {
ordinateur : Ordinateur;
  constructor(private addOrdinateur: OrdinateurService, private router: Router) { }
  onSubmit(){
    this.addOrdinateur.addOrdinateur(this.ordinateur).subscribe(then => {
      this.router.navigate(['/computers']);
    });
  }
  ngOnInit(): void {
    this.ordinateur = new Ordinateur();
  }

}
