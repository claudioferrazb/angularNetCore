import { Atendimento } from "./atendimento";

export interface Especialista {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  identificacao: string;
  sexo: string;
  telefone: string;
  atendimentos: Atendimento[];
}
