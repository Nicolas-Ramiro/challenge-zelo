# Zelo Pet App

## Informações do Grupo

**Nome do Grupo:** Zelo

**Integrantes e RM:**
| Nome | RM |
|------|-----|
| [Hebert Lopes do santos] | [563192] |
| [Marcus Vinícius Vila Nova da Silva] | [558771] |
| [Nicolas Monteiro Ramiro] | [562380] |

## Descrição da Aplicação

O **Zelo Pet App** é um aplicativo mobile simples para monitoramento de saúde de animais de estimação, desenvolvido em React Native com Expo. A aplicação permite que tutores acompanhem os sinais vitais de seus pets, gerenciem a carteira de vacinação e tenham acesso a informações de saúde.

### Funcionalidades Principais

- **Login:** Tela de autenticação simples
- **Home:** Visão geral do pet principal com status de saúde e métricas
- **Pets:** Gerenciamento de múltiplos pets com carteira de vacinação
- **Sinais Vitais:** Monitoramento de BPM, qualidade do sono, calorias e atividade
- **Perfil:** Informações do tutor, dados pessoais e pets vinculados

---

## Estrutura de Pastas

```
challenge-zelo/
├── App.tsx                      # Arquivo principal com navegação
├── screens/
│   ├── LoginScreen.tsx         # Tela de Login
│   ├── HomeScreen.tsx          # Tela Home
│   ├── PetsScreen.tsx          # Tela Pets e Carteira de Vacinação
│   ├── VitalsScreen.tsx        # Tela Sinais Vitais
│   └── ProfileScreen.tsx       # Tela Profile
├── constants/
│   └── mockData.ts             # Dados mockados
├── app.json                    # Configuração do Expo
├── package.json                # Dependências
└── tsconfig.json               # Configuração TypeScript
```

---

## Tecnologias Utilizadas

- **React Native 0.81.5** - Framework mobile
- **Expo 54.0.8** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **React 19.1.0** - Biblioteca de UI

---

## Como Instalar e Executar

### Pré-requisitos

- npm ou yarn instalado
- Expo CLI (opcional)

### Instalação

1. **Navegue até a pasta do projeto:**
   ```bash
   cd challenge-zelo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

### Executar em Desenvolvimento

**Iniciar o servidor Expo:**
```bash
npm start
# ou
yarn start
```

**No navegador (Web):**
```bash
npm run web
```

**No iOS (macOS apenas):**
```bash
npm run ios
```

**No Android:**
```bash
npm run android
```

**Com QR Code (Expo Go):**
- Escaneie o código QR exibido no terminal com o app Expo Go no seu dispositivo

---

## Fluxo de Navegação

1. **Login** → Qualquer email válido (ex: teste@email.com)
2. **Home** → Visão geral do pet principal
3. **Pets** → Lista de pets e carteira de vacinação
4. **Sinais Vitais** → Monitoramento de saúde
5. **Perfil** → Dados do tutor e logout

---

## Dados Mockados

### Pets
- Luna (Golden Retriever, 4 anos)
- Buddy (Chihuahua, 2 anos)

### Vacinas
- V10 - Dose 01 (Aplicada)
- Raiva - Reforço Anual (Pendente)
- Gripe Canina (Agendada)

### Sinais Vitais
- BPM: 84
- Sono: 9.5 horas
- Calorias: 450 kcal
- Atividade: 65 minutos

---

## Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa no navegador
```

---

## Notas Importantes

- Todos os dados são mockados para demonstração
- A navegação é feita através de estado local (useState)
- Não há integração com backend nesta versão
- O projeto segue o padrão simples dos projetos FIAP

---

**Desenvolvido para o desafio FIAP 2026 - Mobile Application Development**
