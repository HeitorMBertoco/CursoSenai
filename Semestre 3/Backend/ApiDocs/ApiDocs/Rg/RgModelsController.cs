using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiDocs.Data;

namespace ApiDocs.Rg
{
    [Route("api/[controller]")]
    [ApiController]
    public class RgModelsController : ControllerBase
    {
        private readonly ApiDocsContext _context;

        public RgModelsController(ApiDocsContext context)
        {
            _context = context;
        }

        // GET: api/RgModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RgModel>>> GetRgModel()
        {
            return await _context.RgModel.ToListAsync();
        }

        // GET: api/RgModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RgModel>> GetRgModel(Guid id)
        {
            var rgModel = await _context.RgModel.FindAsync(id);

            if (rgModel == null)
            {
                return NotFound();
            }

            return rgModel;
        }

        // PUT: api/RgModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRgModel(Guid id, RgModel rgModel)
        {
            if (id != rgModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(rgModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RgModelExists(id))
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

        // POST: api/RgModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RgModel>> PostRgModel(RgModel rgModel)
        {
            _context.RgModel.Add(rgModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRgModel", new { id = rgModel.Id }, rgModel);
        }

        // DELETE: api/RgModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRgModel(Guid id)
        {
            var rgModel = await _context.RgModel.FindAsync(id);
            if (rgModel == null)
            {
                return NotFound();
            }

            _context.RgModel.Remove(rgModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RgModelExists(Guid id)
        {
            return _context.RgModel.Any(e => e.Id == id);
        }
    }
}
