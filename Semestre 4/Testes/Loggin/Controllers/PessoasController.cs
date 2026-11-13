using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Loggin;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

[Route("api/[controller]")]
[ApiController]
public class PessoasController : ControllerBase
{
    private readonly logginContext _context;
    private readonly IPasswordHasher<Pessoa> _passwordHasher;
    private readonly ILogger<PessoasController> _logger;
    public PessoasController(
    logginContext context,
    IPasswordHasher<Pessoa> hasher,
    ILogger<PessoasController> logger) 
    {
        _context = context;
        _passwordHasher = hasher;
        _logger = logger; 
    }



    // GET: api/Pessoa
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoa()
    {
        return await _context.Pessoa.ToListAsync();
    }

    // GET: api/Pessoa/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Pessoa>> GetPessoa(System.Guid id)
    {
        var pessoa = await _context.Pessoa.FindAsync(id);

        if (pessoa == null)
        {
            return NotFound();
        }

        return pessoa;
    }

    // PUT: api/Pessoa/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPessoa(System.Guid? id, Pessoa pessoa)
    {
        if (id != pessoa.Id)
        {
            return BadRequest();
        }

        _context.Entry(pessoa).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PessoaExists(id))
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

    // POST: api/Pessoa
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Pessoa>> PostPessoa(Pessoa pessoa)
    {
        _logger.LogInformation("Iniciando cadastro de nova pessoa: {Nome}", pessoa.name);

        pessoa.senha = _passwordHasher.HashPassword(pessoa, pessoa.senha);
        _context.Pessoa.Add(pessoa);
        await _context.SaveChangesAsync();

        _logger.LogInformation("Pessoa cadastrada com sucesso. ID: {PessoaId}", pessoa.Id);

        return CreatedAtAction("GetPessoa", new { id = pessoa.Id }, pessoa);
    }

    // No POST /verify (Login/Autenticação)
    [HttpPost("/verify")]
    public async Task<ActionResult<Pessoa>> PostVerify(Pessoa pessoa)
    {
        var salva = await _context.Pessoa.FindAsync(pessoa.Id);

        if (salva == null)
        {
            _logger.LogWarning("Tentativa de verificação falhou. ID não encontrado: {PessoaId}", pessoa.Id);
            return NotFound(); // Dica: retornar NotFound() ou Unauthorized() é melhor que estourar ArgumentException
        }

        if (_passwordHasher.VerifyHashedPassword(pessoa, salva.senha, pessoa.senha) == PasswordVerificationResult.Success)
        {
            _logger.LogInformation("Senha verificada com sucesso para o ID: {PessoaId}", pessoa.Id);
            return Ok();
        }

        _logger.LogWarning("Senha inválida informada para o ID: {PessoaId}", pessoa.Id);
        return Unauthorized();
    }

    // DELETE: api/Pessoa/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePessoa(System.Guid? id)
    {
        var pessoa = await _context.Pessoa.FindAsync(id);
        if (pessoa == null)
        {
            return NotFound();
        }

        _context.Pessoa.Remove(pessoa);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool PessoaExists(System.Guid? id)
    {
        return _context.Pessoa.Any(e => e.Id == id);
    }
}
