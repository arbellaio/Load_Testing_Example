using Microsoft.AspNetCore.Mvc;

namespace Load_Testing_Example.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoadApiController : ControllerBase
    {
        [HttpGet("youtube")]
        public IActionResult YouTube()
        {
            return Ok(new
            {
                Subscribers = 2000,
            });
        }
        
        [HttpGet("github")]
        public IActionResult Github()
        {
            return Ok(new
            {
                Subscribers = 50000,
            });
        }
        
        [HttpGet("facebook")]
        public IActionResult Facebook()
        {
            return Ok(new
            {
                Subscribers = 70000,
            });
        }
    }
}