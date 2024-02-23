# 🏦 TSBANK APP

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=orange) &nbsp;
![Bun version](https://img.shields.io/static/v1?label=bun&message=v1.0.26&color=yellow) &nbsp;
![Repository size](https://img.shields.io/github/repo-size/bush1D3v/tsbank_app?color=green) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=blue)

## 🔍 Sobre o Projeto

O **TSBank APP** é uma aplicação **mobile** do nosso queridíssimo <a href="https://github.com/bush1D3v/tsbank_front">TSBank</a>, possuindo todas as funcionalidades existentes de um banco, como **saque**, **depósito**, **pix**, cartões de **crédito** e **débito**, **gerenciamento** de transações e informações do seu usuário, etc.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<div align='center'>
   <img align='center' height='64' width='58' title='React Native' alt='react native' src='https://github.com/bush1D3v/tsbank_app/assets/133554156/d97db34b-5c29-4aa3-95ae-b098bf544f52' />
   <img align='center' height='58' width='64' title='Expo' alt='expo' src='https://github.com/bush1D3v/tsbank_app/assets/133554156/8a772dfd-74d8-4e53-9b55-43232da7c82c' />
   <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg' />
   <img align='center' height='60' width='60' title='Babel' alt='babel' src='https://github.com/bush1D3v/tsbank_app/assets/133554156/cc9f6980-18c2-4025-8afd-395d8e981e36' />
   <img align='center' height='50' width='70' title='TypeScript' alt='typescript' src='https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' />
   <img align='center' height='54' width='68' title='Tailwindcss' alt='tailwindcss' src='https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg' />
   <img align='center' height='50' width='70' title='JavaScript' alt='javascript' src='https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' />
   <img align='center' height='52' width='56' title='Nativewind' alt='nativewind' src='https://github.com/bush1D3v/tsbank_app/assets/133554156/4fc94d62-52c3-4343-9b2d-4ba6a53e5a7d' /> &nbsp;
   <img align='center' height='70' width='50' title='Axios' alt='axios' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/b9ff307f-3582-4635-ae6e-361215efc742' /> &nbsp;
   <img align='center' height='49' width='59' title='Zod' alt='zod' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/5a769805-23e2-4f8b-904d-034b25a982a6' /> &nbsp; &nbsp;
   <img align='center' height='54' width='54' title='React Hook Form' alt='react hook form' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/65a90eb9-1188-4197-a902-6b055464cc76' />&nbsp;&nbsp;
   <img align='center' height='75' width='75' title='Docker' alt='docker' src='https://github.com/devicons/devicon/blob/master/icons/docker/docker-plain.svg' />&nbsp;&nbsp;
   <img align='center' height='50' width='50' title='Maestro' alt='maestro' src='https://github.com/bush1D3v/tsbank_app/assets/133554156/8d6658d9-cdab-4914-8e5d-bf15c73354ac' />&nbsp;&nbsp;
   <img align='center' height='54' width='68' title='Jest' alt='jest' src='https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg' />
</div>

## 🏗 Estrutura e Arquitetura

O projeto segue os princípios da **arquitetura limpa** e o código foi organizado de acordo com os princípios de **modularidade**, **reutilização** e **responsabilidade única**.

## 🐳 Docker

Com a adição do Docker, você agora pode utilizar dos scripts fornecidos em `package.json` para poder construir a imagem docker e rodar os containers da aplicação, dos testes e da documentação.

Para isso, segue a lista de funções de cada script:

> `docker-build`: Constrói a imagem docker do projeto <br> `docker-start`: Sobe e roda/só roda o container tsbank_app <br> `docker-stop`: Para o container tsbank_app

# 🖋️ Contribuindo para o TSBank APP

Agradecemos pelo seu interesse em contribuir para o **TSBank APP**. Sua ajuda é **valiosa** para melhorar e **expandir** nossa aplicação. Abaixo estão as **diretrizes** e os **passos** para contribuir com nosso projeto.

## 💻 Como Contribuir

### 🌳 Forkando o Repositório

Antes de começar, você **deverá** forkar o repositório do projeto para **seu perfil**.

### 🖨 Clonando seu Repositório

Após o Fork, você **precisará** clonar o repositório forkado para seu **ambiente de desenvolvimento local**:

```
git clone https://github.com/{seu-usuario}/tsbank_app.git
cd tsbank_app
```

### ⏬ Instalando Dependências

Certifique-se de ter Node.js instalado no seu sistema. Em seguida, instale as dependências necessárias:

```
npm install
```

ou

```
yarn install
```

ou

```
pnpm install
```

### 🆕 Criando uma Branch

Antes de iniciar qualquer trabalho, crie uma branch separada para a sua contribuição. Use um nome descritivo para a sua branch:

```
git checkout -b feature/nova-funcionalidade
```

### 🔨 Fazendo Alterações

Faça as alterações necessárias no código, adicione novos recursos ou correções de bugs.

### 🧪 Testando

Garanta que suas alterações não quebraram nenhum recurso existente. Execute os testes e certifique-se de que todos passam:

```
npm run test
```

ou

```
yarn test
```

ou

```
pnpm test
```

### 📝 Documentando

Mantenha a documentação atualizada. Se você adicionou novos recursos, adicione arquivos de documentação (caso necessário) e verifique se eles estão devidamente documentados.

### 📊 Compromissos e Push

Após concluir suas alterações e testá-las, faça um commit das alterações:

```
git add .
git commit -m <tipo de alteração>(nomeDoArquivo): Nova funcionalidade
```

Em seguida, envie suas alterações para o repositório:

```
git push origin feature/nova-funcionalidade
```

### 📨 Solicitando um Pull Request (PR)

Vá para o repositório no GitHub e crie um Pull Request para que sua contribuição seja revisada. Certifique-se de descrever suas alterações e fornecer informações contextuais.

### 👁 Revisão e Fusão

Após criar um Pull Request, nossa equipe revisará suas alterações e fornecerá feedback. Uma vez aprovado, suas alterações serão mescladas no projeto principal.

## 💼 Diretrizes Gerais

- Mantenha o código limpo e legível.
- Siga as boas práticas de desenvolvimento.
- Respeite as convenções de nomenclatura existentes.
- Documente adequadamente as alterações, recursos ou correções.

#

**_Agradecemos pela sua contribuição e esperamos trabalhar juntos para tornar o TSBank APP ainda melhor. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Juntos, podemos criar uma aplicação mais robusta e eficiente._**
