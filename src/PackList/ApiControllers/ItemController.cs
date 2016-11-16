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
	[Route("api/v1/Item")]
	public class ItemController : Controller
	{
		private GenericRepository<Item> repository;

		public ItemController(GenericRepository<Item> repository)
		{
			this.repository = repository;

		}

		public IEnumerable<Item> Get() => repository.GetAll();

		[HttpGet("{id}", Name = "GetItem")]
		public IActionResult Get(int id)
		{
			var item = repository.FindById(id);
			if(item == null)
			{
				return NotFound();
			}
			return new ObjectResult(item);
		}

		[HttpPost]
		public IActionResult Create([FromBody] Item item)
		{
			if(item == null)
			{
				return BadRequest();
			}
			repository.Add(item);

			return CreatedAtRoute("GetItem", new { id = item.ItemId }, item);
		}
	}
}