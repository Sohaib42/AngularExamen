import { Component, OnInit } from '@angular/core';
import {Ordinateur} from "../../models/ordinateur";
import {OrdinateurService} from "../../services/ordinateur.service";

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
ordinateurs : Ordinateur[];
isLoading: boolean;
id: number;
  constructor(private http:OrdinateurService) { }

  ngOnInit(): void {
    this.isLoading =true;
    this.http.getAllComputers().subscribe(data => {
      this.ordinateurs = data;
      this.isLoading = false;
    });
  }
  deleteOrdinateur(ordinateur: Ordinateur) {
    this.isLoading = true;
    this.http.deleteOrdinateur(ordinateur.id).subscribe( data => {
      this.http.getAllComputers().subscribe(newDataOrdinateur => {
        this.ordinateurs = newDataOrdinateur;
        this.isLoading = false;
      })
    })
  }
}
