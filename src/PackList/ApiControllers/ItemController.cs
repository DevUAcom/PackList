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

		[HttpGet]
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

			return new ObjectResult(item);
		}

		[HttpPut]
		public IActionResult Update([FromBody] Item item)
		{
			if(item == null)
			{
				return BadRequest();
			}
			repository.Update(item);

			return new ObjectResult(item);
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			repository.DeleteById(id);
			return new NoContentResult();
		}
	}
}