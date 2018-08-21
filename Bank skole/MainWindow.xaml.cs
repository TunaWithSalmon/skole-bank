using System;
using System.Collections.Generic;

namespace Bank_skole
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow
    {
        public MainWindow()
        {
            InitializeComponent(); 
        }
        public class MyViewModel
        {
            public List<String> Items
            {
                get { return new List<String> { "One", "Two", "Three" }; }
            }
        }

        //This can be done in the Loaded event of the page:
        DataContext = private MyViewModel();
    }

    internal class DataContext
    {
    }
}