using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bank_skole.collections;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bank_skole.accessLayer
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