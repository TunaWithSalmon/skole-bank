using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Bank_skole.models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bank_skole.db
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

        
        // TODO: Needs to serching for someing including name and serach for first and last name
        public async Task<List<Customer>> GetCustomersByName(string name)
        {
            return await GetAll(new BsonDocument("firstName", name));
        }
    }
}