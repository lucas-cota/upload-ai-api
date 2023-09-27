# API OpenAI

Esta é uma API que se conecta com a IA da OpenAI para realizar várias tarefas, incluindo transcrição de vídeos e geração de resumos. A seguir, estão listadas as principais funcionalidades da API:

## Funcionalidades

1. **Obter Prompts:**

   Você pode usar a rota `GET /prompts` para obter prompts que serão usados para interagir com a API da OpenAI.

2. **Upload de Vídeo:**

   Utilize a rota `POST /videos` para fazer o upload de vídeos para processamento.

3. **Criar Transcrição:**

   A rota `POST /videos/{videoId}/transcription` permite criar uma transcrição para um vídeo específico.

4. **Gerar Completamento de IA:**

   Utilize a rota `POST /ai/complete` para gerar um resumo sucinto de uma transcrição de vídeo usando a IA da OpenAI.

## Uso

Para começar a usar a API, siga estas etapas:

1. Clone este repositório: `git clone https://github.com/lucascota-ld/upload-ai-api.git`
2. Navegue até o diretório do projeto: `cd upload-ai-api`
3. Crie seu arquivo .env com base no .env.example
4. Instale as dependências: `npm install`
5. Crie a estrutura de tabelas do banco de dados: `npx prisma migrate dev`
6. Crie prompts de forma automática: `npx prisma db seed`
7. Inicie o servidor: `npm run dev`
8. Veja seu banco de dados de maneira interativa: `npx prisma studio`


A API estará disponível em [http://localhost:3333](http://localhost:3333) para teste e integração com seu projeto.

## Contribuição

Contribuições são bem-vindas! Para contribuir com o desenvolvimento deste projeto, siga estas etapas:

1. Crie um fork deste repositório.
2. Faça suas modificações e melhorias.
3. Envie um pull request para este repositório.

Por favor, certifique-se de seguir o [código de conduta](CODE_OF_CONDUCT.md).


## Contato

Se você tiver alguma dúvida ou precisar de suporte, entre em contato comigo em lucas.a.cota@gmail.com.
