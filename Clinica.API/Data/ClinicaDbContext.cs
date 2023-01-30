using Clinica.API.Controllers.models;
using Microsoft.EntityFrameworkCore;

namespace Clinica.API.Data
{
    public class ClinicaDbContext : DbContext
    {
        public ClinicaDbContext(DbContextOptions options) : base(options){ }

        public DbSet<Paciente> Paciente { get; set; }
    }
}