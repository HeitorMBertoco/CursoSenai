using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Escola.Models;

namespace Escola.Pages.AlunoPages;

public class EditModel : PageModel
{
    private readonly EscolaContext _context;

    public EditModel(EscolaContext context)
    {
        _context = context;
    }

    [BindProperty]
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
        Aluno = aluno;
        return Page();
    }

    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Attach(Aluno).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AlunoExists(Aluno.Id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return RedirectToPage("./Index");
    }

    private bool AlunoExists(System.Guid id)
    {
        return _context.Aluno.Any(e => e.Id == id);
    }
}
