using Microsoft.AspNetCore.Mvc;

namespace home.core.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
