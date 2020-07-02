import { Component, OnInit } from '@angular/core';
import {Ordinateur} from "../../models/ordinateur";
import {ActivatedRoute} from "@angular/router";
import {OrdinateurService} from "../../services/ordinateur.service";

@Component({
  selector: 'app-detail-ordinateur',
  templateUrl: './detail-ordinateur.component.html',
  styleUrls: ['./detail-ordinateur.component.css']
})
export class DetailOrdinateurComponent implements OnInit {
id: number;
element : Ordinateur;
isLoading: boolean;
  constructor(private route: ActivatedRoute, private httpID: OrdinateurService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.httpID.getOneComputer(+this.route.snapshot.paramMap.get('id')).subscribe((data:Ordinateur) => {
      this.element = data;
      this.isLoading = false;
    });
  }
}
