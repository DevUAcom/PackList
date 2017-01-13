using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PackList.Data.Repositories
{
	public class GenericRepository<TEntity> where TEntity : class
	{
		private ApplicationDbContext context;
		private DbSet<TEntity> dbSet;
		public GenericRepository(ApplicationDbContext context)
		{
			this.context = context;
			dbSet = context.Set<TEntity>();
		}
		public async Task<IEnumerable<TEntity>> GetAllAsync()
		{
			return await dbSet.AsNoTracking().ToListAsync();
		}

		public async Task<IEnumerable<TEntity>> GetBy(Expression<Func<TEntity, bool>> predicate)
		{
			return await dbSet.AsNoTracking().Where(predicate).ToListAsync();
		}

		public async Task<TEntity> FindByIdAsync<TKey>(TKey id)
		{
			var item = Expression.Parameter(typeof(TEntity), "entity");
			var prop = Expression.Property(item, typeof(TEntity).Name + "Id");
			var value = Expression.Constant(id);
			var equal = Expression.Equal(prop, value);
			var lambda = Expression.Lambda<Func<TEntity, bool>>(equal, item);

			return await dbSet.AsNoTracking().SingleOrDefaultAsync(lambda);
		}

		public async Task AddAsync(TEntity entity)
		{
			context.Add(entity);
			await context.SaveChangesAsync();
		}

		public async Task UpdateAsync(TEntity entity)
		{
			context.Update(entity);
			await context.SaveChangesAsync();
		}

		public async Task DeleteByIdAsync<TKey>(TKey id)
		{
			var entity = await dbSet.FindAsync(id);
			if (entity != null)
			{
				dbSet.Remove(entity);
				await context.SaveChangesAsync();
			}
		}



	}
}
