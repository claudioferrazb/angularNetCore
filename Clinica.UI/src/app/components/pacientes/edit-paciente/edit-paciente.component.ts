import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {
  pacienteDetalhe: Paciente = {
    id: 0,
    cpf: '',
    dataNasc: new Date(),
    sexo: '',
    nome: '',
    telefone: '',
    email: ''
  };
  constructor(private router: Router, private route: ActivatedRoute, private pacientesService: PacientesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        if (id) {
          this.pacientesService.getPaciente(parseInt(id))
          .subscribe(
            (response) => this.pacienteDetalhe = response,
            (e) => console.log(e)
          );
        }
      }
    );
  }

  updatePaciente() {
    this.pacientesService.updatePaciente(this.pacienteDetalhe.id, this.pacienteDetalhe)
    .subscribe(
      () => { this.router.navigate(['pacientes']); },
      (e) => console.log(e)
    );
  }

  deletePaciente(id: number) {
    this.pacientesService.deletePaciente(id)
    .subscribe(
      () => { this.router.navigate(['pacientes']); },
      (e) => console.log(e)
    );
  }

}
