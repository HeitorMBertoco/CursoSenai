
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Hashing;
using Hashing.Contract;


[Route("api/[controller]")]
[ApiController]
public class LoginsController : ControllerBase
{
    private readonly HashingContext _context;
    private readonly PasswordHasher<Login> _passwordHasher;

    public LoginsController(HashingContext context)
    {
        _context = context;
        _passwordHasher = new PasswordHasher<Login>();
    }

    // GET: api/Logins
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Login>>> GetLogin()
    {
        return await _context.Login.ToListAsync();
    }

    // GET: api/Logins/{id}
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Login>> GetLogin(Guid id)
    {
        var login = await _context.Login.FindAsync(id);

        if (login == null)
        {
            return NotFound();
        }

        return login;
    }

    // PUT: api/Logins/{id}
    [HttpPut("{id:guid}")]
    public async Task<IActionResult> PutLogin(Guid id, Login login)
    {
        if (id != login.id)
        {
            return BadRequest("O ID da URL é diferente do ID do login.");
        }

        _context.Entry(login).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!LoginExists(id))
            {
                return NotFound();
            }

            throw;
        }

        return NoContent();
    }

    // POST: api/Logins
    [HttpPost]
    public async Task<ActionResult<Login>> PostLogin(Login login)
    {
        // Gera o hash da senha antes de salvar no banco.
        login.senha = _passwordHasher.HashPassword(login, login.senha);

        _context.Login.Add(login);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetLogin),
            new { id = login.id },
            login
        );
    }



   

    [HttpPost("verify")]
    public async Task<IActionResult> VerificarHash([FromBody] PostLoginRequest request)
    {
        var userBanco = await _context.Login.FirstOrDefaultAsync(u => u.cpf == request.Cpf);



    var resultado = _passwordHasher.VerifyHashedPassword(
        userBanco,
        userBanco.senha,
        request.Senha
    );
        if (resultado == PasswordVerificationResult.Success)
        {
            return Ok();
        }


        return Unauthorized();
        
    }



    // DELETE: api/Logins/{id}
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteLogin(Guid id)
    {
        var login = await _context.Login.FindAsync(id);

        if (login == null)
        {
            return NotFound();
        }

        _context.Login.Remove(login);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool LoginExists(Guid id)
    {
        return _context.Login.Any(e => e.id == id);
    }
}
