# Teste para vaga de Fullstack Jr

O objetivo deste teste é entender o candidato, sua experiência e sua capacidade de resolução de problemas com dúvidas e detalhes que serão exigidos no dia-a-dia como programador Fullstack Junior. O teste é baseado em questionamentos e problemas a serem resolvidos.

## Como será feito o teste?

O teste é dividido em 2 etapas:

- Questões teóricas.
- Projeto prático, quer seja correção de bug ou criação do mesmo.
  
O candidato precisa criar um repositório próprio com a seguinte estrutura:

- No README serão respondidas as questões teóricas (pergunta e resposta), de forma organizada e explicada.
No próprio repositório estará o projeto prático, corrigido e/ou criado.
- Após a finalização, o candidato deve enviar um e-mail para suporte@b7web.com.br com o link do repositório original (este) bem como o link do repositório pessoal com a resolução.

--------------------------------------------------------------------------

### Questões Teóricas

- 1 - Quais as partes principais de uma requisição HTTP?
  
    _URL, VERBO HTTP, CABEÇALHOS, CORPO DA REQUISIÇÃO_

- 2 - Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?

    _No **head** o script é executado antes dos elementos serem montos em tela e no fim do **body** é executado depois que os elementos já foram carregados._

- 3 - Qual a diferença entre display: block e display: inline-block ?

    _No **block** os elementos são oragnizados em coluna e no **inline-block** em linha._

    _o block/inline-block funciona baseado no writting-mode, então se o writting-mode for vertical-lr por exemplo, os elementos com display block ficam em linha, e os inline-block ficariam em coluna. O que realmente diferencia os dois é que o block vai alocar todo o espaço disponível no writting-mode em que ele estiver, e o inline-block vai alocar só o espaço do elemento em si (a não ser que ele sofra interferencia de width/height/padding e etc);_

- 4 - É possível criar um site responsivo SEM media queries? Por que?

    _Sim, usando medidas em porcentagem, porém creio que não seja o mais apropriado._

- 5 - No Javascript, é obrigatório usar VAR para criar uma variável?

    _Não, pode-se usar LET e CONST também._

- 6 - Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?

    _Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico. Isso significa que arrow functions herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado no momento da chamada (se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente como o contexto global, que no caso dos navegadores é window)_

    _Arrow functions não podem ser constructors, então não é possível usar o operador new com a mesma_

    _Expressões de função podem ser nomeadas explicatamente, isso é útil em alguns cenários que envolvem recursão e para em casos de exceção fica mais fácil de rastrear o código, visto que o nome da função é usado na pilha de exceção mostrada ao desenvolvedor. Só que Arrows Functions não podem ser nomeadas explicitamente, elas acabam herdando o nome da variável onde foi criada._

    _Expressões de função precisam declarar explicitamente qual será o retorno da função, enquanto Arrow Functions permitem escrever em um modelo encurtado onde a última expressão analisada será o retorno da função quando é omitido as chaves {}._

- 7 - Explique a lógica pra fazer uma paginação.

    _precisamos fazer alguns cálculos de onde se inicia e termina de acordo com a página atual do cliente. Para se obter a quantidade de páginas, arredondamos para cima a divisão da quantidade de registros contidos, pela quantidade de itens a ser exibido por página, assim podemos saber quantos botões vamos ter que implementar na página. O fim é a multiplicação da página atual pela quantidade de registros por páginas, e o início é a quantidade final subtraída pela quantidade por páginas_

- 8 - Qual a melhor forma de armazenar uma imagem no banco de dados?

    _Armazenando apenas o caminho(url) dela._

- 9 - No React, quantos useEffect eu posso usar?

    _Quantos forem necessários._

- 10 - Quais métodos de requisição preciso para criar um CRUD via API?

    _GET, POST, PUT, PATCH e DELETE_

--------------------------------------------------------------------------

### Projeto prático

Crie uma aplicação do tipo BLOCO DE NOTAS em React. Essa aplicação deve fazer:

- Adicionar uma nova nota.
- Editar uma nota existente.
- Deletar uma nota.
- Na listagem, cada nota deve ter uma cor própria de fundo, escolhida de uma lista de cores predefinidas na página de adicionar/editar.
- Toda a aplicação deve funcionar via API, com o backend criado por você. - A beleza estética do design não irá influenciar, contudo, a organização da estrutura de interface sim será observada.

Tanto o BACKEND quanto o FRONTEND devem fazer uso de variáveis de ambiente.

No backend, a criação e uso de migration é um plus mas não é obrigatório. Caso não use migration, colocar um arquivo .txt com a estrutura de banco de dados para replicação.
