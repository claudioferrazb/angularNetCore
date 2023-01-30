using System.Collections.Generic;

namespace Clinica.API.Controllers.models
{
    public class Atendimento
    {
        public int Id { get; set; }
        public string data { get; set; }
        public string dataRetorno { get; set; }
        public string hora { get; set; }
        public string duracao { get; set; }
        public string observacao { get; set; }
        public long valor { get; set; }
        public int status { get; set; }
        public Paciente Paciente { get; set; }
    }
}