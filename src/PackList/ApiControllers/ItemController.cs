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
		public async Task<IEnumerable<Item>> Get() => await repository.GetAllAsync();

		[HttpGet("{id}", Name = "GetItem")]
		public async Task<IActionResult> Get(int id)
		{
			var item = await repository.FindByIdAsync(id);
			if(item == null)
			{
				return NotFound();
			}
			return new ObjectResult(item);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Item item)
		{
			if(item == null)
			{
				return BadRequest();
			}
			await repository.AddAsync(item);

			return new ObjectResult(item);
		}

		[HttpPut]
		public async Task<IActionResult> Update([FromBody] Item item)
		{
			if(item == null)
			{
				return BadRequest();
			}
			await repository.UpdateAsync(item);

			return new ObjectResult(item);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await repository.DeleteByIdAsync(id);
			return new NoContentResult();
		}
	}
}