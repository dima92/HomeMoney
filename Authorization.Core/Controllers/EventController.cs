using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Authorization.Core.Models;

namespace Authorization.Core.Controllers
{
    [EnableCors(origins: "http://localhost:26756", headers: "*", methods: "*", SupportsCredentials = true)]
    public class EventController : ApiController
    {
        readonly ApplicationDbContext _dbContext = new ApplicationDbContext();
        public EventController()
        {

        }

        [HttpGet]
        public IHttpActionResult GetCategories()
        {
            var result = _dbContext.Categories.ToList();
            return Ok(result);
        } 
    }
}
