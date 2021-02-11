import { EmployerService } from './../../service/employer.service';
import { Utilisateur } from './../../model/utilisateur';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employe-row, [employe-row]',
  templateUrl: './employe-row.component.html',
  styleUrls: ['./employe-row.component.css']
})
export class EmployeRowComponent implements OnInit {
  @Input()
  user: Utilisateur = new Utilisateur();
  edit: boolean = false;
  @Output('delete')
  deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output('insert')
  insertEvent: EventEmitter<void> = new EventEmitter();
  @Output('cancel')
  cancelEvent: EventEmitter<void> = new EventEmitter();

  constructor(private employerService: EmployerService) {}

  ngOnInit(): void {
    if (!this.user.id) {
      this.changeMode();
    }
  }

  public delete() {
    this.deleteEvent.emit(this.user.id);
  }

  public changeMode() {
    this.edit = !this.edit;
  }

  public cancel() {
    this.changeMode();
    if (!this.user.id) {
      console.log('here');
      this.cancelEvent.emit();
    }
  }

  public save() {
    if (this.user.id) {
      this.employerService.update(this.user).subscribe((result) => {
        this.changeMode();
      });
    } else {
      this.employerService.insert(this.user).subscribe((result) => {
        this.user.id = result.id;
        this.changeMode();
        this.insertEvent.emit();
      });
    }
  }
}
