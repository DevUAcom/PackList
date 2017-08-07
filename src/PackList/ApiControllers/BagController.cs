using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PackList.Data.Models;
using PackList.Data.Repositories;

namespace PackList.ApiControllers
{
    [Produces("application/json")]
    [Route("api/v1/Bag")]
    public class BagController : Controller
    {
		private readonly GenericRepository<Bag> repository;

	    public BagController(GenericRepository<Bag> repository)
	    {
			this.repository = repository;
	    }

        // GET: api/Bag
        [HttpGet]
        public async Task<IEnumerable<Bag>> Get() => await repository.GetAllAsync();
        
        // GET: api/Bag/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> Get(int id)
        {
			Bag bag = await repository.FindByIdAsync(id);
			if(bag == null)
			{
				return NotFound();
			}
			return new ObjectResult(bag);

		}
        
        // POST: api/Bag
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Bag bag)
        {
			if(bag == null)
			{
				return BadRequest();
			}
			await repository.UpdateAsync(bag);

			return new ObjectResult(bag);
        }
        
        // PUT: api/Bag/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
