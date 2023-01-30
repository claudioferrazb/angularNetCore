import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/models/atendimento';

@Component({
  selector: 'app-atendimentos-lista',
  templateUrl: './atendimentos-lista.component.html',
  styleUrls: ['./atendimentos-lista.component.css']
})
export class AtendimentosListaComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  constructor() { }

  ngOnInit() {
  }
}
