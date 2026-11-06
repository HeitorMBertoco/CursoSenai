using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Escola.Models;

namespace Escola.Pages.AlunoPages;

public class DetailsModel : PageModel
{
    private readonly EscolaContext _context;
    public DetailsModel(EscolaContext context)
    {
        _context = context;
    }

    public Aluno Aluno { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var aluno = await _context.Aluno.FirstOrDefaultAsync(m => m.Id == id);
        if (aluno is null)
        {
            return NotFound();
        }
        else
        {
            Aluno = aluno;
        }

        return Page();
    }
}
