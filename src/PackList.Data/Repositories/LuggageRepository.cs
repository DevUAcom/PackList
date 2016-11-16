using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PackList.Data.Models;

namespace PackList.Data.Repositories
{
    public class LuggageRepository : ILuggageRepository
    {
      private ApplicationDbContext context;

	  public LuggageRepository(ApplicationDbContext context)
	  {
	    this.context = context;
	  }

      public IEnumerable<Luggage> Luggage => context.Luggage;
    }
}
