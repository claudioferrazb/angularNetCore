import { Especialista } from "./especialista";
import { Paciente } from "./paciente";

export interface Atendimento {
  id: number;
  data: string;
  dataRetorno: string;
  hora: string;
  duracao: string;
  observacao: string;
  valor: number;
  status: number;
}
