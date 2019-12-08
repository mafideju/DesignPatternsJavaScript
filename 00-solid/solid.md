S.O.L.I.D

5 principios de design de código em OOP

Criado por _Michael Feathers_ baseado nos estudos de _Robert Cecil Martin_

## _Single Responsibility
### Cada classe deve ter uma finalidade espefifica.

## _Open Closed
### Aberto a expansão, fechado a modificação. Estender o comportamento de uma classe sem modificar a mesma.

## _Liskov substitution
### Quando expande ou estende a classe, os métodos (objeto) dos filhos devem ser equivalentes aos metodos do pai.

## _Interface segregation
### Escrever interfaces pequenas, modularizadas ao invés de grandes, cheias de dados.

## _Dependency inversion
### Modulos do codigo devem depender todos de abstrações e não um do outro.
#### _High Level Modules_: classes abstratas e interfaces (dependem de outras implementações - não fazem nada sozinha)
#### _Low Level Modules_: classes e métodos com ação concreta na aplicação.

### Modulos e objetos devem ter _responsabilidade única_. Para que o principio _Open Closed_ funcione corretamente, é preciso introduzir _interfaces modulares_ fechadas para modificação que possam ser estensiveis. Aplicando o principio de _Liskov_ você usa a mesma _interface_ para diversas _implementações_.
