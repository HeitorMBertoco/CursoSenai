
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleEstoque.Contracts;
using ControleEstoque.Data;
using ProdutoDomain;

namespace ControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoModelsController : ControllerBase
    {
        private readonly ControleEstoqueContext _context;

        public ProdutoModelsController(ControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/ProdutoModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProdutoModel>>> GetProdutoModel()
        {
            return await _context.ProdutoModel.ToListAsync();
        }

        // GET: api/ProdutoModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProdutoModel>> GetProdutoModel(Guid id)
        {
            var produtoModel = await _context.ProdutoModel.FindAsync(id);

            if (produtoModel == null)
            {
                return NotFound();
            }

            return produtoModel;
        }

        // PUT: api/ProdutoModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProdutoModel(Guid id, ProdutoModel produtoModel)
        {
            if (id != produtoModel.id)
            {
                return BadRequest();
            }

            _context.Entry(produtoModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoModelExists(id))
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

        // POST: api/ProdutoModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProdutoModel>> PostProdutoModel(PostProdutoModelRequest request
            )
        {
            var produtoModel= new ProdutoModel(
                true,
                request.CategoriaId,
                request.UnidadeMedidaId,
                request.Nome,
                request.Descricao,
                request.QuantidadeAtual ?? 0
                );


            _context.ProdutoModel.Add(produtoModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProdutoModel", new { id = produtoModel.id }, produtoModel);
        }

        [HttpPatch("/imagem/{id}")]

        public async Task<IActionResult> PacthProdutoImagem(Guid id, IFormFile arquivo)
        {
            var produto = await _context.ProdutoModel.FindAsync(id);

            if (produto == null)
            {
                return NotFound("Produto não encontrado"); 
            }
            var extensao = Path.GetExtension(arquivo.FileName).ToLower();

            var diretorio = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");

            var dirarq = Path.Combine(diretorio, $"{id}{extensao}");

            var stream = new FileStream(dirarq, FileMode.Create);
            await arquivo.CopyToAsync(stream);

            

            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                return BadRequest();
            }


            return NoContent();
        }

        // DELETE: api/ProdutoModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProdutoModel(Guid id)
        {
            var produtoModel = await _context.ProdutoModel.FindAsync(id);
            if (produtoModel == null)
            {
                return NotFound();
            }

            _context.ProdutoModel.Remove(produtoModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoModelExists(Guid id)
        {
            return _context.ProdutoModel.Any(e => e.id == id);
        }
    }
}
