using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactDotnet.Data;
using ReactDotnet.Models;

namespace ReactDotnet.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class ProjectsController : ControllerBase
    {
        private readonly ProjectContext _context;
        public ProjectsController(ProjectContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }
    }
}