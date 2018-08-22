using System;

namespace bacnk_web.Db
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