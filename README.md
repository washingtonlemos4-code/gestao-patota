# Gestão da Patota

Sistema web responsivo para gerenciamento de uma patota de futebol com dashboard, atletas, jogos, gols, goleiros, mensalidades e relatórios.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação:
   ```bash
   npm start
   ```
3. Acesse:
   ```bash
   http://localhost:3000
   ```

## Funcionalidades implementadas

- Dashboard com indicadores principais
- Cadastro de atletas (criar, editar, consultar, desativar)
- Cadastro de jogos com placar e observações
- Registro de gols por atleta e minuto
- Controle de goleiros por partida
- Ranking de artilharia e goleiros
- Controle de mensalidades por atleta, mês e ano
- Relatórios financeiros e de desempenho
- Persistência em SQLite
- Interface responsiva em português do Brasil

## Estrutura

- `server.js` → API REST + SQLite + serviço web
- `public/` → frontend responsivo em HTML, CSS e JavaScript
- `data/` → banco de dados SQLite

## Observações

- O banco é persistente e será criado automaticamente na primeira execução.
- Nenhum dado real foi inventado; o sistema pode começar vazio e ser usado imediatamente.
