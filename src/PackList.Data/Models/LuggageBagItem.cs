using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PackList.Data.Models
{
    public class LuggageBagItem
    {
	    public int LuggageId { get; set; }
	    public Luggage Luggage { get; set; }

		public int BagId { get; set; }
	    public Bag Bag { get; set; }

		public int ItemId { get; set; }
		public Item Item { get; set; }
	}
}
