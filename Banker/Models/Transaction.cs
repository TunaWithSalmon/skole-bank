using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Banker.Models
{
    [Serializable]
    public class Transaction
    {
        public MongoDB.Bson.ObjectId _id;
        public MongoDB.Bson.ObjectId AccountId;
        public string TransactionName;
        public float Amount;
        public DateTime Created;
        public DateTime Modified;

        internal Task<List<Transaction>> GetTransactions()
        {
            throw new NotImplementedException();
        }
    }
}