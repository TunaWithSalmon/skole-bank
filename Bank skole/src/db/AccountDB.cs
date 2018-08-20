using System.Collections.Generic;
using System.Threading.Tasks;
using Bank_skole.models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bank_skole.db
{
    public class AccountDB : DB<Account>
    {
        public AccountDB(IMongoDatabase db) : base("Account", db)
        { 
        }

        public async Task<List<Account>> GetAccounts()
        {
            return await GetAll(new BsonDocument());
        }
    }
}