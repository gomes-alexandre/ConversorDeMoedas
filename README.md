Conversor de Moedas com Bandeiras
Este é um Conversor de Moedas simples e responsivo, que permite ao usuário converter valores entre diferentes moedas e exibir as bandeiras correspondentes para cada moeda no campo de seleção. 
O projeto foi desenvolvido com HTML, CSS e JavaScript, e utiliza a API do Fixer.io para obter taxas de câmbio em tempo real.

Recursos
Conversão de moedas em tempo real usando a API do Fixer.io.
Exibição de bandeiras das moedas no seletor.
Histórico das últimas 5 conversões realizadas.
Interface amigável e design responsivo para diversos dispositivos.
Demonstração
Veja a seguir uma captura de tela do conversor de moedas:

![image](https://github.com/user-attachments/assets/52de211b-756b-4ce2-bbdd-1179cc698486)

Tecnologias Utilizadas
HTML5: Para estrutura do conteúdo.
CSS3: Para estilização e layout, incluindo responsividade.
JavaScript: Para a lógica de conversão e integração com a API.
Fixer.io API: Para obter taxas de câmbio em tempo real.
Flag Icon CSS: Biblioteca para bandeiras dos países no campo de seleção de moedas.
Funcionalidades
Conversão Automática: Ao inserir um valor e selecionar as moedas de origem e destino, o resultado é exibido automaticamente.
Histórico de Conversões: Mantém um histórico das últimas 5 conversões realizadas, que é salvo localmente no navegador.
Exibição de Bandeiras: Ao selecionar uma moeda, a bandeira correspondente é exibida ao lado do nome da moeda no campo de seleção.
Como Usar
Requisitos
Conta no Fixer.io: Para obter uma chave de API gratuita. A chave é necessária para acessar as taxas de câmbio.
Navegador moderno: Para executar o projeto localmente ou via servidor web.
Passos para Execução
Clonar o Repositório: Clone o repositório em sua máquina local usando o comando abaixo:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-repositorio.git
Obter Chave da API Fixer.io: Registre-se no Fixer.io e obtenha sua chave de API. Substitua SUA_CHAVE_API no arquivo script.js pela sua chave pessoal:

javascript
Copiar código
const apiUrl = `http://data.fixer.io/api/latest?access_key=SUA_CHAVE_API`;
Abrir o Projeto: Abra o arquivo index.html em um navegador moderno ou use um servidor web local para executar o projeto.

Estrutura do Projeto
plaintext
Copiar código
📂 conversor-de-moedas/
├── 📂 css/
│   └── style.css
├── 📂 js/
│   └── script.js
├── index.html
└── README.md
Funcionalidade de Histórico
O histórico de conversões é salvo no localStorage do navegador e exibido automaticamente ao recarregar a página.
Você pode converter qualquer valor entre as moedas suportadas, e a conversão será exibida instantaneamente, incluindo a taxa de câmbio aplicada.
Melhorias Futuras
Mais Moedas: Expandir o suporte para mais moedas.
Melhorias no Histórico: Implementar um sistema para limpar ou exportar o histórico de conversões.
Suporte a Tema Escuro: Adicionar um tema escuro para melhorar a usabilidade em ambientes com pouca luz.
Testes Unitários: Implementar testes para garantir a precisão das conversões.
Como Contribuir
Faça um fork deste repositório.
Crie uma branch para sua modificação: git checkout -b minha-modificacao.
Commit suas mudanças: git commit -m 'Adiciona nova funcionalidade'.
Envie para a branch original: git push origin minha-modificacao.
Crie um Pull Request.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Autor
Alexandre Gomes

GitHub: github.com/gomes-alexandre
LinkedIn: https://www.linkedin.com/in/alegsouza/
