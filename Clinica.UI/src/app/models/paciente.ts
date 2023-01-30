import { Atendimento } from "./atendimento";

export interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  dataNasc: Date;
  sexo: string;
  telefone: string;
}
