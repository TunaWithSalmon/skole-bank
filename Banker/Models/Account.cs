using System;
using System.Collections.Generic;

namespace Banker.Models
{
    [Serializable]
    public class Account
    {
        public MongoDB.Bson.ObjectId _id;
        public MongoDB.Bson.ObjectId CustomerId;
        public string AccountNumber;
        public string AccountType;
        public float InterestRate;
        public DateTime Created;
        public DateTime Modified;
    }
}