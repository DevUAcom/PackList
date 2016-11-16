using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using PackList.Data.Models;

namespace PackList.Data
{
	public static class SeedData
	{
	  public static void EnsurePopulated(IApplicationBuilder app)
	  {
		ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();

		if (!context.Luggage.Any())
		{
		  context.Luggage.AddRange(
			  new Luggage { Name = "Luggage for Turkey"}
			  );
		}

	    if (!context.Categories.Any())
	    {
			context.Categories.AddRange(
			  new Category { Name = "Clothing and Shoes"},
			  new Category { Name = "Hygiene" },
			  new Category { Name = "Electronics" },
			  new Category { Name = "Sport" }
			);
	    }

	    context.SaveChanges();
	  }
	}
}
