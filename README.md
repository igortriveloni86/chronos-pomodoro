# Chronos — Pomodoro

Aplicativo Pomodoro simples construído com React + TypeScript e Vite, focado em gerenciar ciclos de trabalho/pausa, histórico de tarefas e notificações sonoras.

**Descrição**

- **Propósito:** Fornecer uma interface leve para gerenciar sessões Pomodoro, acompanhar tarefas e armazenar histórico.
- **Público-alvo:** Usuários que desejam produtividade por meio da técnica Pomodoro.

**Principais funcionalidades**

- **Temporizador Pomodoro:** iniciar/pausar/reiniciar ciclos de trabalho e pausa.
- **Histórico de tarefas:** salvar e ordenar tarefas concluídas com timestamps.
- **Notificações sonoras:** carga de áudios para alertar fim de ciclo.
- **Configurações:** ajustar duração dos ciclos e preferências do usuário.

**Tecnologias**

- **Framework:** React 19 + TypeScript
- **Bundler/Dev:** Vite
- **Estado/contexto:** Context API (ex.: `src/contexts/TaskContext`)
- **Workers:** Web Worker (`src/workers/timerWorker.js`) para manter o temporizador fora do thread principal
- **Outras libs:** `date-fns`, `react-toastify`, `lucide-react`

**Instalação**

1. Clone o repositório:

```
git clone https://github.com/igortriveloni86/chronos-pomodoro.git
cd chronos-pomodoro
```

2. Instale dependências:

```powershell
npm install
```

3. Rodar em desenvolvimento:

```powershell
npm run dev
```

4. Build de produção:

```powershell
npm run build
```

5. Visualizar build (preview):

```powershell
npm run preview
```

**Scripts disponíveis**

- `npm run dev` : inicia o servidor de desenvolvimento (Vite).
- `npm run build` : compila TypeScript e gera o build com Vite.
- `npm run preview` : serve a versão de produção para verificação local.
- `npm run lint` : executa o ESLint sobre o código.

**Estrutura do projeto (resumo)**

- `src/` : código-fonte principal.
  - `components/` : componentes reutilizáveis (Botões, Inputs, Contadores, etc.).
  - `contexts/TaskContext/` : lógica e reducer para tarefas e ciclos.
  - `workers/` : `timerWorker.js` e `TimeWorkerManager.ts` para separar o temporizador do main thread.
  - `utils/` : utilitários como formatação de tempo, seleção do próximo ciclo, carregamento de beep, etc.

**Notas importantes**

- O temporizador utiliza um Web Worker para manter contagem precisa mesmo quando a interface fica ocupada.
- O estado global de tarefas e ciclos é gerenciado por um contexto React (`TaskContext`) com reducer — ver `src/contexts/`.

**Contribuindo**

- Abra uma issue descrevendo o problema ou feature desejada.
- Faça um fork, crie uma branch com a feature/bugfix e envie um Pull Request.
- Siga o padrão existente de componentes e mantenha o TypeScript tipado.

**Licença**

Este repositório não especifica uma licença. Adicione um arquivo `LICENSE` caso queira publicar sob termos específicos (por exemplo MIT).

**Contato**

- Abra issues ou PRs no repositório GitHub: `https://github.com/igortriveloni86/chronos-pomodoro`.
