using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleEstoque.Data;
using ProdutoDomain;

namespace ControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnidadeMedidasController : ControllerBase
    {
        private readonly ControleEstoqueContext _context;

        public UnidadeMedidasController(ControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/UnidadeMedidas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnidadeMedida>>> GetUnidadeMedida()
        {
            return await _context.UnidadeMedida.ToListAsync();
        }

        // GET: api/UnidadeMedidas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UnidadeMedida>> GetUnidadeMedida(Guid id)
        {
            var unidadeMedida = await _context.UnidadeMedida.FindAsync(id);

            if (unidadeMedida == null)
            {
                return NotFound();
            }

            return unidadeMedida;
        }

        // PUT: api/UnidadeMedidas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUnidadeMedida(Guid id, UnidadeMedida unidadeMedida)
        {
            if (id != unidadeMedida.id)
            {
                return BadRequest();
            }

            _context.Entry(unidadeMedida).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnidadeMedidaExists(id))
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

        // POST: api/UnidadeMedidas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UnidadeMedida>> PostUnidadeMedida(UnidadeMedida unidadeMedida)
        {
            _context.UnidadeMedida.Add(unidadeMedida);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUnidadeMedida", new { id = unidadeMedida.id }, unidadeMedida);
        }

        // DELETE: api/UnidadeMedidas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUnidadeMedida(Guid id)
        {
            var unidadeMedida = await _context.UnidadeMedida.FindAsync(id);
            if (unidadeMedida == null)
            {
                return NotFound();
            }

            _context.UnidadeMedida.Remove(unidadeMedida);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UnidadeMedidaExists(Guid id)
        {
            return _context.UnidadeMedida.Any(e => e.id == id);
        }
    }
}
