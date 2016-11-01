using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PackList.Data.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string Name { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
