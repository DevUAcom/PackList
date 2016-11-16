using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PackList.Data.Models;
using PackList.Data.Repositories;

namespace PackList.ApiControllers
{
	[Produces("application/json")]
	[Route("api/v1/Luggage")]
	public class LuggageController : Controller
	{
		private ILuggageRepository repository;
		public LuggageController(ILuggageRepository repository)
		{
			this.repository = repository;
		}

		[HttpGet]
		public IEnumerable<Luggage> Get() => repository.Luggage;
	}
}