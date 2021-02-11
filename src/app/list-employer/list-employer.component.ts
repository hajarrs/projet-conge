import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { EmployerService } from '../service/employer.service';

@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css']
})
export class ListEmployerComponent implements OnInit {

  employers: Utilisateur[] = [];
  showNew: boolean = false;

  constructor(private utilisateurService: EmployerService) { }

  ngOnInit(): void {
    this.initList();
  }

  public initList() {
    this.utilisateurService.allEmployer().subscribe((data) => {
      this.employers = data;
      console.log(data);
    });
  }

  public delete(id: number) {
    this.utilisateurService.delete(id).subscribe((result) => {
      this.initList();
    });
  }

  public displayNew() {
    this.showNew = !this.showNew;
  }

  public insert() {
    this.displayNew();
    this.initList();
  }

  public cancel() {
    this.displayNew();
  }


}
