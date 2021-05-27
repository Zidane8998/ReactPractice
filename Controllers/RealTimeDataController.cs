using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace ReactPractice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RealTimeDataController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<RealTimeDataController> _logger;

        public RealTimeDataController(ILogger<RealTimeDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Coin> Get()
        {
            List<Coin> list = new List<Coin>();
            Coin temp = new Coin();
            temp.Name = "Algorand";

            temp.LastPriceCoinbase = 0.81m;
            temp.LastPriceBitfinex = 0.80m;
            temp.LastPriceKraken = 0.70m;

            list.Add(temp);

            return list;
        }
    }
}
