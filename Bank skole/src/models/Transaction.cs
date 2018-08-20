using System;

namespace Bank_skole.models
{
    public class Transaction
    {
        public int TransactionId;
        public string TransactionName;
        public float Amount;
        public DateTime Created;
        public DateTime Modified;
    }
}