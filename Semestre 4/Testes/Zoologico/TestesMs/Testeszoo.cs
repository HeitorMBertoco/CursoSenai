namespace TestescomMs;
using ClasseTestar;

[TestClass]
public sealed class ZooTeste
{
    [TestMethod]
    public void NameNull()
    {
        Action act = () => new Zoologico(
        nome: "",
        especie: "Cachorro",
        sexo: "m",
        idade: 10,
        dataentrada: new DateOnly(2026, 07, 23)

        );
        Assert.Throws<ArgumentNullException>(act);
    }
    [TestMethod]
    public void SexoNull()
    {
    Action act = () => new Zoologico(
        nome: "jonas",
        especie: "Cachorro",
        sexo: "",
        idade: 10,
        dataentrada: new DateOnly(2026, 07, 23)

        );
        Assert.Throws<ArgumentNullException>(act);
    }
    [TestMethod]
    public void EspecieNull()
    {
     Action act = () => new Zoologico(
        nome: "jonas",
        especie: "",// imbecil
        sexo: "f",
        idade: 2,
        dataentrada: new DateOnly(2026, 07, 23)

        );
        Assert.Throws<ArgumentNullException>(act);
    }
    [TestMethod]
    public void idadePequena()
    {
    Action act = () => new Zoologico(
        nome: "jonas",
        especie: "Imbecil",// imbecil
        sexo: "f",
        idade: -1,
        dataentrada: new DateOnly(2026, 07, 23)

        );
        Assert.Throws<ArgumentException>(act);
    }
    [TestMethod]
    public void DataInvalida()
    {
    Action act = () => new Zoologico(
        nome: "jonas",
        especie: "Imbecil",// imbecil
        sexo: "f",
        idade: -1,
        dataentrada: new DateOnly(2026, 07, 27)

        );
        Assert.Throws<ArgumentException>(act);
    }
}
