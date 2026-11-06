using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Razor.Models;

namespace Razor.Pages.SuplementoPages;

public class CreateModel : PageModel
{
    private readonly RazorContext _context;

    public CreateModel(RazorContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [BindProperty]
    public Suplemento Suplemento { get; set; } = default!;

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Suplemento.Add(Suplemento);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
