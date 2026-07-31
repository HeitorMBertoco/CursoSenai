namespace Exceptions;

public class IdadeMinimaNaoAtingidaException : Exception 
{
 public IdadeMinimaNaoAtingidaException ( ) : base() { }

 public IdadeMinimaNaoAtingidaException(string message) : base(message) {}


 public IdadeMinimaNaoAtingidaException(string message, Exception innerException) : base(message, innerException) {}  

}
public class QuantidadeAlunosMinimaNaoAtingidaException : Exception 
{
 public QuantidadeAlunosMinimaNaoAtingidaException ( ) : base() { }

 public QuantidadeAlunosMinimaNaoAtingidaException(string message) : base(message) {}


 public QuantidadeAlunosMinimaNaoAtingidaException(string message, Exception innerException) : base(message, innerException) {}  

}
public class DataInvalidaException : Exception 
{
 public DataInvalidaException ( ) : base() { }

 public DataInvalidaException(string message) : base(message) {}


 public DataInvalidaException(string message, Exception innerException) : base(message, innerException) {}  

}