using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PackList.Data.Models
{
    public class Luggage
    {
        public int LuggageId { get; set; }
        public string Name { get; set; }
		public virtual ICollection<LuggageBag> LuggageBags { get; set; }
		public virtual ICollection<LuggageBagItem> LuggageBagItems { get; set; }
	}
}
