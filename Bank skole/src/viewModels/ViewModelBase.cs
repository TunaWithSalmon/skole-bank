using System.ComponentModel;
using System.Runtime.CompilerServices;
using Bank_skole.Annotations;

namespace Bank_skole.viewModels
{
    public abstract class ViewModelBase : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));  
        }
    }
}