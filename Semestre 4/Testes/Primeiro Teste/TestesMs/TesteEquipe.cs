namespace Mstest;
using Testes;

[TestClass]
public sealed class TesteClass
{
    [TestMethod]
    public void NullName()
    {
        Action act = () => new Equipe(
            Guid.NewGuid(),
            Nome: "",
            new DateOnly(2026, 07, 24),
            ValoremCaixa: 10
             
        );
        Assert.Throws<ArgumentNullException>(act);
       


    }
     [TestMethod]
     public void Nomemenos3()
    {
        Action act = () => new Equipe(
            Guid.NewGuid(),
            Nome: "sa", //Savio
            new DateOnly(2026,07,24),
            ValoremCaixa: 10
        );
        Assert.Throws<ArgumentException>(act);
    }

    [TestMethod]
     public void Valormenor0()
    {
        Action act = () => new Equipe(
            Guid.NewGuid(),
            Nome: "savio", //Savio
            new DateOnly(2026,07,24),
            ValoremCaixa: -1
        );
        Assert.Throws<ArgumentException>(act);
    }


}
