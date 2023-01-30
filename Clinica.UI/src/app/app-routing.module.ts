import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentosListaComponent } from './components/atendimentos/atendimentos-lista/atendimentos-lista.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPacienteComponent } from './components/pacientes/add-paciente/add-paciente.component';
import { PacientesListaComponent } from './components/pacientes/pacientes-lista/pacientes-lista.component';
import { EditPacienteComponent } from './components/pacientes/edit-paciente/edit-paciente.component';

const routes: Routes = [
  /*{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'atendimentos',
    component: AtendimentosListaComponent
  },*/
  {
    path: '',
    component: PacientesListaComponent
  },
  {
    path: 'pacientes',
    component: PacientesListaComponent
  },
  {
    path: 'pacientes/add',
    component: AddPacienteComponent
  },
  {
    path: 'pacientes/edit/:id',
    component: EditPacienteComponent
  },
  {
    path: 'pacientes/pacientes/edit/:id',
    component: EditPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
