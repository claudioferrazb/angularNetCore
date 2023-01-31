import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service'

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {
  public pacientes: Paciente[] = [];
  public pacientesFiltrados: Paciente[] = [];
  private filtroListado = '';

  constructor(private router: Router, private pacientesService: PacientesService, private spinner: NgxSpinnerService,) { }

  ngOnInit() {
    this.getPacientes();
  }

  public getPacientes (): void {
    this.spinner.show();
    this.pacientesService.getAllPacientes().subscribe(
      (pacientes) => {
        this.spinner.hide()
        this.pacientes = pacientes;
        this.pacientesFiltrados = this.pacientes;
      },
      (error) => {
        this.spinner.hide();
        console.error(error)
      },
    ).add(() => this.spinner.hide());
  }

  deletePaciente(id: number) {
    this.pacientesService.deletePaciente(id)
    .subscribe(
      () => { this.router.navigate(['pacientes']); },
      (e) => console.log(e)
    );
  }

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public filtrarPaciente(filtrarPor: string): Paciente[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pacientes.filter(
      paciente => paciente.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.pacientesFiltrados = this.filtroLista ? this.filtrarPaciente(this.filtroLista) : this.pacientes;
  }

}
