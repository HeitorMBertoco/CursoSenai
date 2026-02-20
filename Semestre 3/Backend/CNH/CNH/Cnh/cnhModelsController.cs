using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CNH.Data;

namespace CNH.Cnh
{
    [Route("api/[controller]")]
    [ApiController]
    public class cnhModelsController : ControllerBase
    {
        private readonly CNHContext _context;

        public cnhModelsController(CNHContext context)
        {
            _context = context;
        }

        // GET: api/cnhModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<cnhModel>>> GetcnhModel()
        {
            return await _context.cnhModel.ToListAsync();
        }

        // GET: api/cnhModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<cnhModel>> GetcnhModel(Guid id)
        {
            var cnhModel = await _context.cnhModel.FindAsync(id);

            if (cnhModel == null)
            {
                return NotFound();
            }

            return cnhModel;
        }

        // PUT: api/cnhModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutcnhModel(Guid id, cnhModel cnhModel)
        {
            if (id != cnhModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(cnhModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!cnhModelExists(id))
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

        // POST: api/cnhModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<cnhModel>> PostcnhModel(cnhModel cnhModel)
        {
            _context.cnhModel.Add(cnhModel);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetcnhModel", new { id = cnhModel.Id }, cnhModel);
        }

        // DELETE: api/cnhModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletecnhModel(Guid id)
        {
            var cnhModel = await _context.cnhModel.FindAsync(id);
            if (cnhModel == null)
            {
                return NotFound();
            }

            _context.cnhModel.Remove(cnhModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool cnhModelExists(Guid id)
        {
            return _context.cnhModel.Any(e => e.Id == id);
        }
    }
}
