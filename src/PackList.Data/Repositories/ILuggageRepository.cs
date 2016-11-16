using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PackList.Data.Models;

namespace PackList.Data.Repositories
{
    public interface ILuggageRepository
    {
		IEnumerable<Luggage> Luggage { get; }
    }
}
