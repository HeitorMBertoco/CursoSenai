
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

        // GET: api/ProdutoModels/buscar
        [HttpGet("buscar")]
        public async Task<ActionResult<IEnumerable<ProdutoModel>>> BuscarProdutos(
            [FromQuery] string? nome,
            [FromQuery] decimal? quantidadeMin,
            [FromQuery] decimal? quantidadeMax,
            [FromQuery] Guid? categoriaId,
            [FromQuery] Guid? unidadeMedidaId,
            [FromQuery] Guid? produtoId,
            [FromQuery] bool? habilitado)
        {
            if (quantidadeMin.HasValue && quantidadeMax.HasValue && quantidadeMin > quantidadeMax)
            {
                return BadRequest("quantidadeMin não pode ser maior que quantidadeMax.");
            }

            var query = AplicarFiltrosBusca(_context.ProdutoModel.AsQueryable(), nome, quantidadeMin, quantidadeMax, categoriaId, unidadeMedidaId, produtoId, habilitado);
            return await query.ToListAsync();
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

        // PATCH: api/ProdutoModels/5
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchProdutoModel(Guid id, PatchProdutoModelRequest request)
        {
            var produto = await _context.ProdutoModel.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            if (request.Habilitado.HasValue)
                produto.Habilitado = request.Habilitado.Value;

            if (request.CategoriaProdutoId.HasValue)
                produto.CategoriaId = request.CategoriaProdutoId.Value;

            if (request.UnidadeMedidaId.HasValue)
                produto.UnidadeMedidaId = request.UnidadeMedidaId.Value;

            if (!string.IsNullOrWhiteSpace(request.Nome))
                produto.Nome = request.Nome;

            if (!string.IsNullOrWhiteSpace(request.Descricao))
                produto.Descricao = request.Descricao;

            if (request.QuantidadeAtual.HasValue)
            {
                if (request.QuantidadeAtual.Value < 0)
                    return BadRequest("QuantidadeAtual não pode ser negativa.");

                produto.QuantidadeAtual = request.QuantidadeAtual.Value;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoModelExists(id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // POST: api/ProdutoModels
        [HttpPost]
        public async Task<ActionResult<ProdutoModel>> PostProdutoModel(PostProdutoModelRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Nome))
                return BadRequest("Nome é obrigatório.");

            if (string.IsNullOrWhiteSpace(request.Descricao))
                return BadRequest("Descricao é obrigatória.");

            var quantidade = request.QuantidadeAtual ?? 0;
            if (quantidade < 0)
                return BadRequest("QuantidadeAtual não pode ser negativa.");

            if (!await _context.CategoriaProduto.AnyAsync(c => c.id == request.CategoriaId))
                return BadRequest("CategoriaId não encontrada.");

            if (!await _context.UnidadeMedida.AnyAsync(u => u.id == request.UnidadeMedidaId))
                return BadRequest("UnidadeMedidaId não encontrada.");

            var produtoModel = new ProdutoModel(
                true,
                request.CategoriaId,
                request.UnidadeMedidaId,
                request.Nome,
                request.Descricao,
                quantidade);

            _context.ProdutoModel.Add(produtoModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProdutoModel), new { id = produtoModel.id }, produtoModel);
        }

        // PATCH: api/ProdutoModels/{id}/imagem
        [HttpPatch("{id}/imagem")]
        public async Task<IActionResult> PatchProdutoImagem(Guid id, IFormFile arquivo)
        {
            if (arquivo == null || arquivo.Length == 0)
                return BadRequest("Arquivo de imagem é obrigatório.");

            var produto = await _context.ProdutoModel.FindAsync(id);
            if (produto == null)
                return NotFound("Produto não encontrado");

            var extensao = Path.GetExtension(arquivo.FileName).ToLowerInvariant();
            var diretorio = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");
            Directory.CreateDirectory(diretorio);

            if (!string.IsNullOrEmpty(produto.NomeArquivoFoto))
            {
                var arquivoAntigo = Path.Combine(diretorio, produto.NomeArquivoFoto);
                if (System.IO.File.Exists(arquivoAntigo))
                    System.IO.File.Delete(arquivoAntigo);
            }

            var nomeArquivo = $"{id}{extensao}";
            var caminhoArquivo = Path.Combine(diretorio, nomeArquivo);

            await using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
            {
                await arquivo.CopyToAsync(stream);
            }

            produto.NomeArquivoFoto = nomeArquivo;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
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
            if (!string.IsNullOrEmpty(produtoModel.NomeArquivoFoto))
            {
                var diretorio = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");

                var dirArquivo = Path.Combine(diretorio, produtoModel.NomeArquivoFoto);

                if (System.IO.File.Exists(dirArquivo))
                {
                    System.IO.File.Delete(dirArquivo);
                }
            }
            _context.ProdutoModel.Remove(produtoModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private static IQueryable<ProdutoModel> AplicarFiltrosBusca(
            IQueryable<ProdutoModel> query,
            string? nome,
            decimal? quantidadeMin,
            decimal? quantidadeMax,
            Guid? categoriaId,
            Guid? unidadeMedidaId,
            Guid? produtoId,
            bool? habilitado)
        {
            if (!string.IsNullOrWhiteSpace(nome))
            {
                var nomeLower = nome.Trim().ToLower();
                query = query.Where(p => p.Nome.ToLower().Contains(nomeLower));
            }

            if (quantidadeMin.HasValue)
                query = query.Where(p => p.QuantidadeAtual >= quantidadeMin.Value);

            if (quantidadeMax.HasValue)
                query = query.Where(p => p.QuantidadeAtual <= quantidadeMax.Value);

            if (categoriaId.HasValue)
                query = query.Where(p => p.CategoriaId == categoriaId.Value);

            if (unidadeMedidaId.HasValue)
                query = query.Where(p => p.UnidadeMedidaId == unidadeMedidaId.Value);

            if (produtoId.HasValue)
                query = query.Where(p => p.id == produtoId.Value);

            if (habilitado.HasValue)
                query = query.Where(p => p.Habilitado == habilitado.Value);

            return query;
        }

        private bool ProdutoModelExists(Guid id)
        {
            return _context.ProdutoModel.Any(e => e.id == id);
        }
    }
}
