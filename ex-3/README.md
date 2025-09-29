# Generazione Dati Aziende – Esercizio 3

Questo esercizio consiste nella generazione di **dati di test per aziende** secondo lo schema fornito (`companySchema`), con almeno **5000 entry**.
L’obiettivo è produrre dati coerenti, tipizzati e validati, pronti per testare applicazioni o API.

---

## 🚀 Stack Tecnologico
- **TypeScript** – tipizzazione sicura dei dati.
- **Vite** – tool per eseguire rapidamente lo script in ambiente TypeScript.
- **@faker-js/faker** – generazione di nomi, indirizzi, siti web e numeri casuali realistici.
- **zod** – validazione dei dati secondo lo schema fornito.
- **fs** – scrittura dei dati in formato JSON su file locale.

---

## 📌 Funzionalità Implementate
- Generazione di **5000 aziende** rispettando i vincoli dello schema:
  - `companyId` conforme alla regex `CO-<uuid>`.
  - Nomi, indirizzi, siti web e settori realistici tramite `faker`.
  - Paesi validi (ISO 3166-1 alpha-2) gestiti internamente tramite un array.
  - `employeeCount` e `revenue` numerici casuali.
- **Validazione parziale** dei primi 100 record con `companySchema.parse` per garantire consistenza.
- Salvataggio dei dati in `companies.json` nella root del progetto.


- `generate.ts` genera i dati, li valida parzialmente e li salva su file JSON.

---

## ▶️ Avvio dello Script
Installare le dipendenze e generare i dati:

```bash
cd ex-3
npm install
npm run generate
