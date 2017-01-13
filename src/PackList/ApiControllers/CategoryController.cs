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
	[Route("api/v1/Category")]
	public class CategoryController : Controller
	{
		private readonly GenericRepository<Category> repository;

		public CategoryController(GenericRepository<Category> repository)
		{
			this.repository = repository;

		}

		[HttpGet]
		public async Task<IEnumerable<Category>> Get() => await repository.GetAllAsync();

		[HttpGet("{id}", Name = "GetCategory")]
		public async Task<IActionResult> Get(int id)
		{
			var category = await repository.FindByIdAsync(id);
			if(category == null)
			{
				return NotFound();
			}
			return new ObjectResult(category);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Category category)
		{
			if(category == null)
			{
				return BadRequest();
			}
			await repository.AddAsync(category);

			return new ObjectResult(category);
		}

		[HttpPut]
		public async Task<IActionResult> Update([FromBody] Category category)
		{
			if(category == null)
			{
				return BadRequest();
			}
			await repository.UpdateAsync(category);

			return new ObjectResult(category);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await repository.DeleteByIdAsync(id);
			return new NoContentResult();
		}
	}
}