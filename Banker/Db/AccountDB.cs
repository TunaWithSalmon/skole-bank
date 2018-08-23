using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Banker.Db;
using Banker.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace bacnk_web.Models
{
    public class AccountDB : DB<Account>
    {
        public AccountDB(IMongoDatabase db) : base("Account", db)
        { 
        }
        public async Task CreateAccount(
            string accounttype,
            int customerid
        )
        {
            var newAcc = new Account()
            {
                CustomerId = customerid,
                AccountNumber = ObjectId.GenerateNewId(DateTime.Now.Second).ToString(),
                AccountType = accounttype,
                InterestRate = GetInterestRate(accounttype),
                Created = DateTime.Now,
                Modified = DateTime.Now
            };
            await Insert(newAcc);
        }

        public async Task<Account> GetAccount(string id)
        {
            return await GetOne(new BsonDocument("_id", ObjectId.Parse(id)));
        }

        public async Task<List<Account>> GetAccounts(string id)
        {
            return await GetAll(new BsonDocument("CustomerId", ObjectId.Parse(id)));
        }
        
        private float GetInterestRate(string type)
        {
            switch (type.ToLower())
            {
                case "normal":
                    return (25 / 100);

                case "saving":
                    return (50 / 100);
                default:
                    return (25 / 100);
            }
        }
    }
}