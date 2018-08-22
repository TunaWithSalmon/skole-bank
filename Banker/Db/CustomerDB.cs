using System;
using System.Threading.Tasks;
using Banker.Db;
using Banker.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace bacnk_web.Models
{
    public class CustomerDB : DB<Customer>
    {
        public CustomerDB(IMongoDatabase db) : base("customer", db)
        {
        }

        public async Task CreateCustomer(
            string firstName,
            string lastName,
            string cpr
        )
        {
            var newCust = new Customer()
            {
                Cpr = cpr,
                FirstName = firstName,
                LastName = lastName,
                Created = DateTime.Now,
                Modified = DateTime.Now 
            };
            await Insert(newCust);
        }

        public async Task<Customer> GetCustomer(string id)
        {
            return await GetOne(new BsonDocument("_id", ObjectId.Parse(id)));
        }

    }
}