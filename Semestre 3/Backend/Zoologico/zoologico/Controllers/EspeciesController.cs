using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AnimalDomain;
using zoologico.Data;

namespace zoologico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EspeciesController : ControllerBase
    {
        private readonly zoologicoContext _context;

        public EspeciesController(zoologicoContext context)
        {
            _context = context;
        }

        // GET: api/Especies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Especie>>> GetEspecie()
        {
            return await _context.Especie.ToListAsync();
        }

        // GET: api/Especies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Especie>> GetEspecie(Guid id)
        {
            var especie = await _context.Especie.FindAsync(id);

            if (especie == null)
            {
                return NotFound();
            }

            return especie;
        }
        // PATCH: api/Especies/5
        // PATCH: api/Especies/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchEspecie(Guid id, Especie especie)
        {
            if (id != especie.Id)
            {
                return BadRequest();
            }

            var existente = await _context.Especie.FindAsync(id);

            if (existente == null)
            {
                return NotFound();
            }

            // Atualiza apenas as propriedades que foram enviadas
            if (!string.IsNullOrEmpty(especie.Nome))
                existente.Nome = especie.Nome;

            if (!string.IsNullOrEmpty(especie.Desc))
                existente.Desc = especie.Desc;

            if (especie.Quantidade.HasValue)
                existente.Quantidade = especie.Quantidade;

            if (!string.IsNullOrEmpty(especie.Arquivo_imagem))
                existente.Arquivo_imagem = especie.Arquivo_imagem;

            // Nota: Geralmente não se altera o objeto Genero inteiro via Patch de Especie, 
            // mas se precisar alterar a referência, faria algo como:
            if (especie.Genero != null)
                existente.Genero = especie.Genero;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EspecieExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // PUT: api/Especies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEspecie(Guid id, Especie especie)
        {
            if (id != especie.Id)
            {
                return BadRequest();
            }

            _context.Entry(especie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EspecieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Especies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Especie>> PostEspecie(Especie especie)
        {
            _context.Especie.Add(especie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEspecie", new { id = especie.Id }, especie);
        }

        // DELETE: api/Especies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEspecie(Guid id)
        {
            var especie = await _context.Especie.FindAsync(id);
            if (especie == null)
            {
                return NotFound();
            }

            _context.Especie.Remove(especie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EspecieExists(Guid id)
        {
            return _context.Especie.Any(e => e.Id == id);
        }
    }
}
