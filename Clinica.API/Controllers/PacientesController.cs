using System;
using System.Threading.Tasks;
using Clinica.API.Controllers.models;
using Clinica.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Clinica.API.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class PacientesController : Controller {
        private readonly ClinicaDbContext _clinicaDbContext;

        public PacientesController(ClinicaDbContext clinicaDbContext)
        {
            _clinicaDbContext = clinicaDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPacientes() {
            var pacientes = await _clinicaDbContext.Paciente.ToListAsync();
            return Ok(pacientes);
        }  

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Paciente pacienteRequest) {
            try {
                await _clinicaDbContext.Paciente.AddAsync(pacienteRequest);
                await _clinicaDbContext.SaveChangesAsync();

                return Ok(pacienteRequest);
            } catch (Exception ex) {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar adicionar eventos. Erro: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetPaciente([FromRoute] int id) {
            var paciente = await _clinicaDbContext.Paciente.FirstOrDefaultAsync(x => x.Id == id);
            if (paciente == null) {
                return NotFound();
            }

            return Ok(paciente);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdatePaciente([FromRoute] int id, Paciente updatePacienteRequest) {
            var paciente = await _clinicaDbContext.Paciente.FindAsync(id);
            if (paciente == null) {
                return NotFound();
            }
            paciente.Nome = updatePacienteRequest.Nome;
            paciente.Email = updatePacienteRequest.Email;
            paciente.Telefone = updatePacienteRequest.Telefone;
            paciente.Sexo = updatePacienteRequest.Sexo;
            paciente.Cpf = updatePacienteRequest.Cpf;

            await _clinicaDbContext.SaveChangesAsync();

            return Ok(paciente);
        }

        
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeletePaciente([FromRoute] int id) {
            var paciente = await _clinicaDbContext.Paciente.FindAsync(id);
            if (paciente == null) {
                return NotFound();
            }
            _clinicaDbContext.Paciente.Remove(paciente);
            await _clinicaDbContext.SaveChangesAsync();
            return Ok();
        }
        
/*


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id) {
            try {
                var paciente = await _clinicaDbContext.UpdatePaciente(User.GetUserId());
                if (paciente == null) return NoContent();

                return Ok(paciente);
            } catch (Exception ex) {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar atualizar eventos. Erro: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try {
                var paciente = await _clinicaDbContext.GetPacienteByIdAsync(User.GetUserId());
                if (paciente == null) return NoContent();

                if (await _clinicaDbContext.DeletePaciente(User.GetUserId())) {
                    return Ok(new { message = "Deletado" });
                } else {
                    throw new Exception("Ocorreu um problem não específico ao tentar deletar Evento.");
                }
            } catch (Exception ex) {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar deletar eventos. Erro: {ex.Message}");
            }
        }*/
    }
}