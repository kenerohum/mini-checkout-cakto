# Teste Front-End Cakto — Kênero Germano

Projeto de checkout desenvolvido em Next.js com foco em separação de responsabilidades e regras de negócio claras para cálculo de totais, taxa e repasse.

## Decisões Técnicas

A aplicação usa Next.js App Router, aproveitando o padrão de rotas por pasta para o checkout em `/[uid]`. O pedido é carregado no servidor (Server Component) e repassado para a árvore de componentes do checkout, o que reduz “loading states” manuais e mantém o fluxo de dados previsível. Para simular backend sem depender de serviços externos, existe uma rota interna em Next que devolve dados mockados. Tomei a liberdade de expandir os dados criando uma estrutura(Order) que guarda as taxas e outras informações.

A UI foi organizada em “seções” do checkout dentro de componentes de layout (ex.: carrinho, formulário, métodos de pagamento), enquanto componentes menores (botão, input, itens de resumo) ficam em uma pasta separada. Isso evita um componente “gigante” e facilita manutenção/isolamento de mudanças. Como trade-off, aumenta um pouco a quantidade de arquivos, mas melhora legibilidade e reuso, além de facilitar manunteções.

Para estado global, foi usado Zustand (ex.: pedido, método de pagamento e dados do comprador) para evitar prop drilling entre blocos do checkout. A lógica de cálculo de valores foi centralizada em uma função utilitária (`calcTotal`), reduzindo risco de divergência entre o que é exibido no resumo e o que é usado no repasse.

## Transparência de Uso de IA (Obrigatório)

Usei IA (GitHub Copilot / Copilot Chat) como apoio para:
- acelerar rascunhos de componentes e estrutura de pastas;
- revisar consistência de cálculos e fluxos (ex.: taxa vs. total do comprador);
- sugerir melhorias de legibilidade (nomes, organização e pequenos ajustes).
- Formatar e corrigir o READMA.md

As decisões finais de arquitetura, organização dos componentes, definição do fluxo de dados (Server Component → Zustand) e validações (CPF/e-mail) foram feitas e ajustadas manualmente com base nas experiências que adquirir em projetos anteriores, conferindo o comportamento rodando o projeto e comparando o resultado com as regras de negócio.

## Regras de Negócio (Obrigatório)

As regras foram garantidas centralizando o cálculo em [src/utils/calcAmount.ts](src/utils/calcAmount.ts), especialmente na função `calcTotal`:

- O comprador paga sempre o preço fixo do produto:
  - o total base é a soma de `currentPrice` dos produtos (`totalProducts`);
  - para Pix, o comprador paga `totalCostumer = totalProducts`;
  - para cartão, a taxa extra por parcela fica como taxa da cakto e é descontada do valor do produtor. Seria um assumir "juros".

- A taxa é descontada do produtor (repasse):
  - a taxa da Cakto (`taxCakto`) é calculada sobre `totalProducts` (Pix ou cartão);
  - o repasse é `sellerReceive = totalProducts - taxCakto`;
  - ou seja, a taxa reduz o quanto o vendedor recebe, não o preço fixo dos produtos exibido ao comprador.

## Como Executar

Instalação e execução:
- `npm install`
- `npm run dev`

Acesso:
- Abra `http://localhost:3000` e clique em “Acessar checkout”
- Ou acesse direto `http://localhost:3000/qwert` (UID mockado)

Observações:
- A API usada no dev é a rota interna do Next em [src/app/api/order/[uid]/route.ts](src/app/api/order/[uid]/route.ts), com mocks.


## Resposta Bônus

“Se tivesse mais tempo, o que você faria para aumentar a conversão deste checkout?”

Desenvolveria funcionalidades que melhorem a confiança do usuário, como prova social (avaliações, número de clientes), customização com logos e imagens/banners da loja, além de implementar indicadores de segurança (selos de confiança, HTTPS badge) e um resumo visual mais claro dos benefícios da compra.

## Link do PR
