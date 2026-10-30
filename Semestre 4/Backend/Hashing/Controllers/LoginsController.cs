
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

using Hashing;
using Hashing.Contract;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class LoginsController : ControllerBase
{
    private readonly HashingContext _context;
    private readonly Microsoft.AspNetCore.Identity.PasswordHasher<Login> _passwordHasher;
    private readonly IConfiguration _config;

    public LoginsController(HashingContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
        _passwordHasher = new Microsoft.AspNetCore.Identity.PasswordHasher<Login>();
    }

    // LISTAR LOGINS
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Login>>> GetLogin()
    {
        return await _context.Login.ToListAsync();
    }

    // BUSCAR LOGIN POR ID
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<Login>> GetLogin(Guid id)
    {
        var login = await _context.Login.FindAsync(id);

        if (login == null)
            return NotFound();

        return login;
    }

    // EDITAR LOGIN
    [HttpPut("{id:guid}")]
    public async Task<IActionResult> PutLogin(Guid id, Login login)
    {
        if (id != login.id)
            return BadRequest("O ID da URL é diferente do ID do login.");

        _context.Entry(login).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!LoginExists(id))
                return NotFound();

            throw;
        }

        return NoContent();
    }

    // CADASTRAR LOGIN
    [HttpPost]
    [AllowAnonymous]
    public async Task<ActionResult<Login>> PostLogin(Login login)
    {
        if (await _context.Login.AnyAsync(u => u.cpf == login.cpf))
        {
            return BadRequest("Já existe um usuário cadastrado com esse CPF.");
        }

        login.senha = _passwordHasher.HashPassword(login, login.senha);

        _context.Login.Add(login);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetLogin),
            new { id = login.id },
            new
            {
                login.id,
                login.nome,
                login.cpf
            }
        );
    }

    // VERIFICAR SENHA E GERAR TOKEN
    [HttpPost("verify")]
    [AllowAnonymous]
    public async Task<IActionResult> VerificarHash([FromBody] PostLoginRequest request)
    {
        var userBanco = await _context.Login
            .FirstOrDefaultAsync(u => u.cpf == request.Cpf);

        if (userBanco == null)
            return Unauthorized("CPF não encontrado.");

        var resultado = _passwordHasher.VerifyHashedPassword(
            userBanco,
            userBanco.senha,
            request.Senha
        );

        if (resultado == PasswordVerificationResult.Failed)
            return Unauthorized("Senha incorreta.");

        var tokenHandler = new JwtSecurityTokenHandler();

        var key = Encoding.UTF8.GetBytes(_config["Jwt:Key"]!);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userBanco.id.ToString()),
                new Claim(ClaimTypes.Name, userBanco.cpf.ToString())
            }),

            Expires = DateTime.UtcNow.AddHours(2),
            Issuer = _config["Jwt:Issuer"],
            Audience = _config["Jwt:Audience"],

            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature
            )
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return Ok(new
        {
            token = tokenHandler.WriteToken(token)
        });
    }

    // EXCLUIR LOGIN
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteLogin(Guid id)
    {
        var login = await _context.Login.FindAsync(id);

        if (login == null)
            return NotFound();

        _context.Login.Remove(login);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool LoginExists(Guid id)
    {
        return _context.Login.Any(e => e.id == id);
    }
}
