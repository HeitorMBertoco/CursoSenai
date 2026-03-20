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
    public class CategoriaProdutoesController : ControllerBase
    {
        private readonly ControleEstoqueContext _context;

        public CategoriaProdutoesController(ControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/CategoriaProdutoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaProduto>>> GetCategoriaProduto()
        {
            return await _context.CategoriaProduto.ToListAsync();
        }

        // GET: api/CategoriaProdutoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaProduto>> GetCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriaProduto.FindAsync(id);

            if (categoriaProduto == null)
            {
                return NotFound();
            }

            return categoriaProduto;
        }

        // PUT: api/CategoriaProdutoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoriaProduto(Guid id, CategoriaProduto categoriaProduto)
        {
            if (id != categoriaProduto.id)
            {
                return BadRequest();
            }

            _context.Entry(categoriaProduto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaProdutoExists(id))
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

        // POST: api/CategoriaProdutoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CategoriaProduto>> PostCategoriaProduto(CategoriaProduto categoriaProduto)
        {
            _context.CategoriaProduto.Add(categoriaProduto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoriaProduto", new { id = categoriaProduto.id }, categoriaProduto);
        }

        // DELETE: api/CategoriaProdutoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriaProduto.FindAsync(id);
            if (categoriaProduto == null)
            {
                return NotFound();
            }

            _context.CategoriaProduto.Remove(categoriaProduto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoriaProdutoExists(Guid id)
        {
            return _context.CategoriaProduto.Any(e => e.id == id);
        }
    }
}
