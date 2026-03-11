using Equipe_Domain;
using Venda_Domain;
using PilotoDomain;
using System.Linq.Expressions;
using System.Diagnostics;



PilotoModel max = new PilotoModel("Max do Vertappen", 200);
PilotoModel hamilton = new PilotoModel("Lewis do Hamilton", 400);

EquipeModel ferrari = new EquipeModel("ferrari");

ferrari.AdicionarPiloto(max);
ferrari.AdicionarPiloto(hamilton);

VendaModel venda1 = new VendaModel("Pedro Alberge");
VendaModel venda2 = new VendaModel("Jonas");
VendaModel venda3 = new VendaModel("Alexandre o pequeno");
VendaModel venda4 = new VendaModel("Brune");

venda1.GerarIngresso("Assento 2", 350);

venda2.GerarIngresso("Assento 23", 350);

venda3.GerarIngresso("Assento 234", 350);

venda4.GerarIngresso("Assento 2345", 350);