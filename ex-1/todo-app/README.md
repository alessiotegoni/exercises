# TODO App – Esercizio 1

Prototipo di **TODO List Web App** sviluppato con **Next.js**, **shadcn/ui** e **jotai**.
L’obiettivo non è la completezza funzionale, ma la **qualità del codice, la struttura e la chiarezza**.

---

## 🚀 Stack Tecnologico
- **Next.js 13+ (App Router)** → framework React per routing e server-side rendering.
- **shadcn/ui** → component library basata su Radix + Tailwind.
- **jotai** → state management semplice e tipizzato.
- **jotai/utils – atomWithStorage** → persistenza dei dati in `localStorage`.

---

## 📌 Funzionalità Implementate
- Aggiunta di un TODO tramite input.
- Visualizzazione della lista di TODO.
- Checkbox per segnare un TODO come completato/non completato.
- Pulsante per eliminare un TODO.
- Persistenza locale automatica (i dati restano salvati anche dopo il refresh).


- **Atom jotai** definito in `/atoms/todos.ts`, tipizzato e persistito con `atomWithStorage`.
- **Componenti riusabili** → ogni parte della UI è modulare.
- **Separazione chiara** tra logica dello stato e presentazione.

---

## ▶️ Avvio del Progetto
Clona la repo ed entra nella cartella dell’esercizio:

```bash
cd ex-1/todo-app
npm install
npm run dev
