# vuejs-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Trabalho de TAP e RAD II 
Criar uma aplicação Web que é um cardápio online. O programa deverá ser capaz de realizar vendas de um estabelecimento para um determinado cliente. Ambos os estabelecimentos e os produtos devem ser cadastrados no programa (Criação, edição e remoção). A aplicação deverá ter duas frentes, uma para o estabelecimento que poderá cadastrar seus produtos e visualizar seus pedidos, e uma para o cliente que irá solicitar a compra de algum produto. O cliente irá fazer a compra de um único produto, não existindo a necessidade de controle de carrinho de compra. Você pode assumir que o pagamento será feito na entrega, então não existe a necessidade de pagamento dentro da aplicação. Como queremos que os usuários acessem a aplicação, a frente do cliente não precisa de autenticação, a cada venda o usuário deve informar o endereço de entrega do produto. Já para a frente do estabelecimento, todas as informações dos produtos e vendas devem ser relacionadas com o estabelecimento em questão e ele precisará de um controle de acesso. 
Especificações do trabalho: 
● Seu programa deve ter duas interfaces, uma para o cliente e outra para o estabelecimento. 
Estabelecimento (Feito)
Razão social, 
CNPJ, 
Nome fantasia, 
telefone, 
email,
senha

● O cliente deve ser capaz de visualizar todos os estabelecimentos da plataforma e seus respectivos produtos (a forma que isto será mostrado fica a seu critério). 
Listar estabelecimento (Feito)
● O cliente deve ser capaz de fazer a compra de um produto, informando a quantidade desejada, o nome de quem irá receber o produto, e o endereço que deve ser entregue. 
Tabela pedido (Feito)	
		Produto
		Estabelecimento
		Quantidade		
		Endereço
		Nome

● Não existe a necessidade de confirmação de pedido aceito ou pedido entregue. Você pode assumir que o estabelecimento sempre irá aceitar o pedido e que sempre irá entregar o mesmo. 
● O estabelecimento deve ser capaz de se cadastrar na plataforma e acessar uma área restrita. 
Page Adm
Cadastrar produto 
Remover
Editar

● Esta área deve ter a possibilidade da gestão de produtos (não existe a necessidade de controle de estoque) e da gestão de pedidos. 
● Informações que uma empresa deve ter: Razão social, CNPJ, Nome fantasia, telefone, email e senha para acesso (logo da empresa é opcional, não existe a necessidade de implementação) 
● Já um produto deve ter: Nome, marca, descrição e preço (foto é opcional). 
	Produto (Nome, marca, descrição e preço (foto é opcional).).
● Por fim, o pedido deve ter as informações referentes ao cliente (nome, produto comprado, quantidade comprada e endereço de entrega). Observações: 
● A plataforma deve ter pelo menos 2 estabelecimentos, com ao menos um produto cada. 
● Data de entrega: 01/10/2021

Tabela pedido
		Quantidade
		Produto id
		Endereço
		Nome
Estabelecimento id



Produto ( depois de logado ele cadastra)
nome,
marca, 
descricao
valor (foto é opcional)).
Estabelecimento id sai fora

Estabelecimento 
Razão social, 
CNPJ, 
Nome fantasia, 
telefone, 
email,
senha
