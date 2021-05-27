using System.ComponentModel.DataAnnotations;

namespace ReactPractice
{
    public class Coin
    {
        public string Name { get; set; }

        [DataType(DataType.Currency)]
        public decimal LastPriceCoinbase { get; set; }

        [DataType(DataType.Currency)]
        public decimal LastPriceBitfinex { get; set; }

        [DataType(DataType.Currency)]
        public decimal LastPriceKraken { get; set; }
    }
}
