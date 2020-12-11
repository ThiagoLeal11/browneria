# Browneria
Esse é o sistema web para uma empresa focada na venda de brownies desenvolvido
com [ReactJS](https://pt-br.reactjs.org/) e [Django](https://www.djangoproject.com/) 
em conjunto com o [DRF](https://www.django-rest-framework.org/).

A comunicação entre o frontend e o backend é por meio do http no formato json com 
autorização por JWT.

## Deploy local do sistema para desenvolvimento
Primeiro você vai precisar instlar o [node.js](https://nodejs.org/en/) no seu computador, 
recomendo a versão LTS.

Se quiser, você também vai precisar do [Yarn](https://yarnpkg.com/), que é um gerenciador 
de dependências parecido como NPM, só que um pouco mais rápido.

Por fim, é necessário que esteja instalado em seu computador o 
[docker](https://www.docker.com/products/docker-desktop) e o 
[docker-compose](https://docs.docker.com/compose/install/)

### 1. Instale as dependências do frontend.
Navegue até o caminho `browneria/frontend/` é rode o comando `yarn install` ou 
`npm install` para instalar as dependências do projeto.

### 2. Execute o docker-compose.
Navegue até `browneria/` e execute o comando `docker-compose up --build -d`, com isso o 
docker ira subir os containers necessários. O parametro `-d` é opcional, caso você não 
queria que o STDOUT dos containers esteja atralado ao seu terminal.

É importante ressaltar que o container do frontend pode demorar um pouco até terminar de compilar
os recursos necessários, isso pode levar até 5 minutos depis que o container foi iniciado.

### 3. Execute as migrações do banco de dados
Ainda no caminho `browneria/` execute `docker-compose run app python manage.py migrate`, 
para aplicar as migrações necessárias no banco de dados e, nesse caso, construir as 
tabelas no banco.

### 4. Desfrute do sistema rodando localmente
Agora é só acessar a página `http://locahost:3000` no seu navegador.
