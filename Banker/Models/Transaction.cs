using System;

namespace Banker.Models
{
    public class Transaction
    {
        public int _id;
        public string TransactionName;
        public float Amount;
        public DateTime Created;
        public DateTime Modified;
    }
}