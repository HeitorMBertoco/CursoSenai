using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Escola.Models;

namespace Escola.Pages.AlunoPages;

public class CreateModel : PageModel
{
    private readonly EscolaContext _context;

    public CreateModel(EscolaContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [BindProperty]
    public Aluno Aluno { get; set; } = default!;

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Aluno.Add(Aluno);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
