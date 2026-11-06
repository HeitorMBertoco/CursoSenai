using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Razor.Models;

namespace Razor.Pages.SuplementoPages;

public class DeleteModel : PageModel
{
    private readonly RazorContext _context;

    public DeleteModel(RazorContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Suplemento Suplemento { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var suplemento = await _context.Suplemento.FirstOrDefaultAsync(m => m.Id == id);
        if (suplemento is null)
        {
            return NotFound();
        }
        else
        {
            Suplemento = suplemento;
        }

        return Page();
    }

    public async Task<IActionResult> OnPostAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var suplemento = await _context.Suplemento.FindAsync(id);
        if (suplemento != null)
        {
            Suplemento = suplemento;
            _context.Suplemento.Remove(Suplemento);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
