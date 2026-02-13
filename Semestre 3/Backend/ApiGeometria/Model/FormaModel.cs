using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGeometria.Model
{
    abstract public class FormaModel 
    {
        public abstract string Tipo { get; set;}
        public double Area { get; set;}
        public double Perimetro { get; set;}

        public FormaModel(string tipo)
        {
            Tipo = tipo;
            
             Area = CalcularArea();
             Perimetro = CalcularPerimetro();
        
            
        }
        public abstract double CalcularArea();
        public abstract double CalcularPerimetro();

    }

}