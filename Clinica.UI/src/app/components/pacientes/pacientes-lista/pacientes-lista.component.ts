import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private router: Router, private pacientesService: PacientesService, private spinner: NgxSpinnerService,) { }

  ngOnInit() {
    this.spinner.show();
    this.pacientesService.getAllPacientes().subscribe(
      (pacientes) => { this.pacientes = pacientes; },
      (pacientes) => { this.spinner.hide(); console.error(pacientes) },
    ).add(() => this.spinner.hide());
  }

  deletePaciente(id: number) {
    this.pacientesService.deletePaciente(id)
    .subscribe(
      () => { this.router.navigate(['pacientes']); },
      (e) => console.log(e)
    );
  }

}
