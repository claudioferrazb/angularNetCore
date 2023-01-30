import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AtendimentosListaComponent } from "./components/atendimentos/atendimentos-lista/atendimentos-lista.component";
import { PacientesService } from './services/pacientes.service';
import { PacientesListaComponent } from './components/pacientes/pacientes-lista/pacientes-lista.component';
import { AddPacienteComponent } from './components/pacientes/add-paciente/add-paciente.component';
import { EditPacienteComponent } from './components/pacientes/edit-paciente/edit-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesListaComponent,
    AddPacienteComponent,
    EditPacienteComponent,
    AtendimentosListaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    PacientesService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
