using System;
using System.Collections.Generic;

namespace Bank_skole.collections
{
    public class Account
    {
        public int _id;
        public int CustomerId;
        public int AccountNumber;
        public string AccountType;
        public float InterestRate;
        public float Balance;
        public List<Transaction> Transactions;
        public DateTime Created;
        public DateTime Modified;
    }
}