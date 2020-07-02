import { Component, OnInit } from '@angular/core';
import {Ordinateur} from "../../models/ordinateur";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdinateurService} from "../../services/ordinateur.service";

@Component({
  selector: 'app-edit-ordinateur',
  templateUrl: './edit-ordinateur.component.html',
  styleUrls: ['./edit-ordinateur.component.css']
})
export class EditOrdinateurComponent implements OnInit {
ordinateur : Ordinateur;
isLoading:boolean;
  constructor(private ordinateurService: OrdinateurService, private activatedRoute: ActivatedRoute, private router: Router) { }

  editOrdinateur(){
    this.ordinateurService.updateOrdinateur(this.ordinateur).subscribe(then => {
      this.router.navigate(['/computers']);
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.ordinateurService.getOneComputer(id).subscribe(data => {
      this.ordinateur = data;
      this.isLoading = false;
      console.log(this.ordinateur)
    });
  }

}
