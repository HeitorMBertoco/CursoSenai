namespace Venda_Domain
{
    public class VendaIngressoModel
    {
        public VendaIngressoModel(string descricao, double valor) 
        {
            this.Descricao = descricao;
            this.Valor = valor; 
   
        }
        
       
        public string Descricao { get; set; }
        public double Valor { get; set; }
    }
}
