# Prompt per Gemini – Generazione Dati di Test

Genera uno script TypeScript dentro un progetto Vite che:

1. Importi le librerie necessarie:
   - `@faker-js/faker` per la generazione dei dati.
   - `zod` e lo schema in `schema/company` già fornito.
   - `fs` per scrivere i file JSON.

2. Crei autonomamente una lista di codici paese (`countryCodes`), dato che `countries-list` non è fornito. Può essere un array con almeno 10 codici paese validi (es. `["US","IT","FR","DE","ES","CN","JP","GB","BR","CA"]`).

3. Definisca una funzione `generateCompany()` che crei un oggetto conforme a `companySchema`, con:
   - `companyId` → stringa che rispetta la regex (`CO-<uuid>`).
   - `name` e `legalName` → generati con `faker.company.name()`.
   - `registeredOffice` → indirizzo con `faker.location.streetAddress()`.
   - `foundationDate` → data nel passato con `faker.date.past({ years: 100 })`.
   - `vat` → oggetto con `country` preso da `countryCodes` e `value` stringa non vuota.
   - `industry` → almeno con `sectorName` (`faker.commerce.department()`).
   - `website` → generato con `faker.internet.url()`.
   - `country` → preso da `countryCodes`.
   - `employeeCount` → numero casuale tra 1 e 10000.
   - `revenue` → oggetto con `millions` numero random (1–1000) e `currency` scelto tra `€` e `$`.

4. Generi un array di **5000 aziende** usando `Array.from`.

5. Validi almeno i primi 100 record con `companySchema.parse` per verificare la correttezza.

6. Salvi il risultato in un file `companies.json` nella root del progetto, formattato con `JSON.stringify(..., null, 2)`.

7. Esporti lo script come comando `npm run generate` tramite uno script nel `package.json`.

---

**Nota:** Lo script deve essere scritto in **TypeScript**, modulare e chiaro, pronto all’esecuzione all’interno di un progetto Vite.
