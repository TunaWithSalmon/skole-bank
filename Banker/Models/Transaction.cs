using System;

namespace Banker.Models
{
    [Serializable]
    public class Transaction
    {
        public MongoDB.Bson.ObjectId _id;
        public string TransactionName;
        public float Amount;
        public DateTime Created;
        public DateTime Modified;
    }
}