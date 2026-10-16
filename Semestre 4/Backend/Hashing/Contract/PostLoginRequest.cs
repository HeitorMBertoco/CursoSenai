namespace Hashing.Contract
{
    public record PostLoginRequest
    {
        public required double Cpf { get; set; }
        public required string Senha { get; set; } 
    }
}
