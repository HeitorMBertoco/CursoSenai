
namespace Venda_Domain
{
    public class VendaModel

    {
        public VendaModel(string nomeCliente) 
        {
            this.NomeCliente = nomeCliente;
   
        }
                public string NomeCliente { get; set; }
        
        public IReadOnlyList<VendaIngressoModel> Ingressos => _ingressos;
        private List<VendaIngressoModel> _ingressos { get; set; } = [];

        public void GerarIngresso(string descricao, double valor)
        {
            VendaIngressoModel ingresso = new VendaIngressoModel(descricao, valor);
            _ingressos.Add(ingresso);

            Console.WriteLine($" O Cliente {NomeCliente} Comprou o {ingresso.Descricao} por {ingresso.Valor}");
        } 



    }
}
