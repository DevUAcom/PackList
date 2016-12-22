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
		public IEnumerable<Category> Get() => repository.GetAll();

		[HttpGet("{id}", Name = "GetCategory")]
		public IActionResult Get(int id)
		{
			var category = repository.FindById(id);
			if(category == null)
			{
				return NotFound();
			}
			return new ObjectResult(category);
		}

		[HttpPost]
		public IActionResult Create([FromBody] Category category)
		{
			if(category == null)
			{
				return BadRequest();
			}
			repository.Add(category);

			return new ObjectResult(category);
		}

		[HttpPut]
		public IActionResult Update([FromBody] Category category)
		{
			if(category == null)
			{
				return BadRequest();
			}
			repository.Update(category);

			return new ObjectResult(category);
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			repository.DeleteById(id);
			return new NoContentResult();
		}
	}
}