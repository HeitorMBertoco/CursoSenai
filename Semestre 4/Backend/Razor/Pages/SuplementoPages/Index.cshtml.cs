using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Razor.Models;

namespace Razor.Pages.SuplementoPages;

public class IndexModel : PageModel
{
    private readonly RazorContext _context;

    public IndexModel(RazorContext context)
    {
        _context = context;
    }

    public IList<Suplemento> Suplemento { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Suplemento = await _context.Suplemento.ToListAsync();
    }
}
