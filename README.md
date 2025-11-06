# Front-End-Login

> Projeto front-end de tela de login e autenticação (TypeScript + HTML + CSS)

Um projeto simples e focado em criar uma interface de login moderna e acessível usando TypeScript, HTML e CSS. Ideal para usar como ponto de partida em aplicações que precisam de uma página de autenticação limpa, com validações básicas e separação de responsabilidades entre markup, estilo e lógica em TypeScript.

Status: Em desenvolvimento

Linguagens (aproximação por composição do repositório)
- TypeScript: 93.5%
- CSS: 3.2%
- HTML: 3.2%
- JavaScript: 0.1%

---

## 🔎 Visão geral

O repositório contém os arquivos necessários para uma página de login responsiva, com:
- Formulário de login (e-mail/usuário e senha)
- Validação de formulário no cliente em TypeScript
- Feedback de erros e estados de carregamento
- Estrutura pronta para integrar com APIs de autenticação (ex.: JWT)

---

## ✨ Funcionalidades

- Validação de campos (ex.: formato de e-mail, senha mínima)
- Tratamento de erros e mensagens para o usuário
- Marcações semânticas e acessibilidade básica (labels, aria-*)
- Layout responsivo com CSS puro
- Código fortemente tipado com TypeScript

---

## 🚀 Tecnologias

- TypeScript
- HTML5
- CSS3
- (Opcional) Ferramentas de build como Vite / Webpack / Parcel — dependendo da configuração do projeto

---

## 📁 Estrutura sugerida do projeto

A estrutura exata pode variar; a seguinte é uma sugestão comum:

- src/
  - index.html
  - styles/
    - main.css
  - app/
    - login.ts
    - validators.ts
    - api.ts
  - assets/
- package.json
- tsconfig.json
- README.md

---

## 💻 Como rodar localmente

As instruções abaixo assumem que o projeto utiliza npm. Se você usa yarn ou pnpm, troque os comandos conforme necessário.

1. Clone o repositório:
```bash
git clone https://github.com/RayhanMisleh/Front-End-Login.git
cd Front-End-Login
```

2. Instale dependências:
```bash
npm install
```

3. Rode em modo de desenvolvimento (ex.: com Vite):
```bash
npm run dev
```
ou, se o projeto usar outro script:
```bash
npm start
```

4. Faça o build para produção:
```bash
npm run build
```

Observação: se o repositório não tiver scripts configurados, crie-os no `package.json` conforme a ferramenta escolhida (Vite, Webpack, Parcel, etc.).

---

## 🧩 Integração com API (exemplo)

A parte de autenticação no front deve chamar sua API de backend. Exemplo simplificado (pseudo-código TypeScript):

```ts
// api.ts
export async function login(email: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Falha ao autenticar');
  return res.json(); // token, usuário, etc.
}
```

Adapte a URL e o tratamento de erros conforme sua API.

---

## ♿ Acessibilidade e boas práticas

- Use labels associadas a inputs (for / id).
- Forneça mensagens claras de erro e estados (loading, sucesso, erro).
- Garanta contraste de cores adequado para legibilidade.
- Suporte navegação por teclado e atributos ARIA quando necessário.

---

## 🧪 Testes

Recomenda-se criar testes unitários para validação (validators) e testes de integração para fluxo de login. Exemplos de ferramentas:
- Jest + Testing Library (DOM / user-event)
- Vitest (quando usar Vite)

---

## 🤝 Como contribuir

Contribuições são bem-vindas! Sugestões:
- Melhorar validações (ex.: força de senha, validação em tempo real)
- Adicionar testes automatizados
- Suporte a reCAPTCHA ou 2FA
- Melhorias de UX (ex.: lembrar-me, recuperar senha)

Procure issues abertas, faça um fork, crie uma branch com sua feature/fix e envie um PR.

---

## 📝 Licença

Adicione aqui a licença do projeto (ex.: MIT). Se ainda não houver, escolha a que preferir e acrescente o arquivo LICENSE.

---

## ✉️ Autor / Contato

RayhanMisleh — https://github.com/RayhanMisleh

Se quiser, inclua um e-mail de contato no repo ou um link para o LinkedIn/website.

---

Se quiser, eu posso:
- Gerar o README em inglês também.
- Inserir instruções específicas de scripts se você me passar o package.json.
- Criar templates de componentes de login em TypeScript com implementação pronta (arquivo .ts/.html/.css).
