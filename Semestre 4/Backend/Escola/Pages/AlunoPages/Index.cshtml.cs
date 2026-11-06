using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Escola.Models;

namespace Escola.Pages.AlunoPages;

public class IndexModel : PageModel
{
    private readonly EscolaContext _context;

    public IndexModel(EscolaContext context)
    {
        _context = context;
    }

    public IList<Aluno> Aluno { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Aluno = await _context.Aluno.ToListAsync();
    }
}
