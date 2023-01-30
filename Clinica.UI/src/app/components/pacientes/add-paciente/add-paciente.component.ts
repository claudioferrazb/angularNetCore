import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {
  baseURL = 'https://localhost:7260';

  addPacienteRequest: Paciente = {
    id: 0,
    cpf: '',
    dataNasc: new Date(),
    sexo: '',
    nome: '',
    telefone: '',
    email: ''
  };

  constructor(private router: Router, private pacientesService: PacientesService) { }

  ngOnInit() {
  }

  salvarPaciente() {
    this.pacientesService.salvarPaciente(this.addPacienteRequest)
    .subscribe(
      () => this.router.navigate(['pacientes']),
      (e) => console.log(e)
    )
  }

}
