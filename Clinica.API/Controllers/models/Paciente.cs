using System.Collections.Generic;

namespace Clinica.API.Controllers.models
{
    public class Paciente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public string DataNasc { get; set; }
        public string Sexo { get; set; }
        public string Telefone { get; set; }
        public IEnumerable<Atendimento> Atendimento { get; set; }
    }
}