# ✅ Todo: Pagina "Tutti i film" con filtri

## 🔹 Obiettivo
Creare una pagina che mostri tutti i film disponibili con possibilità di filtraggio per categoria (genere), ogni film sarà mostrato come una card cliccabile.

---

## 📌 Passi da seguire

### 1. **Crea il file della pagina**
- Percorso: `/app/movies/page.tsx`
- Sarà la pagina "Tutti i film"

### 2. **Recupera i dati dei film**
- Usa una funzione simile a `fetchLatestMovies`, ma per ottenere tutti i film popolari o top rated.
- Endpoint TMDB utile: `/discover/movie` oppure `/movie/popular`

### 3. **Mostra i film in una griglia**
- Ogni film deve essere rappresentato da una `card`
- Le card devono includere: titolo, immagine, media voto
- Al click, si va alla pagina dettaglio del film (`/movie/[id]`)

### 4. **Implementa i filtri per genere**
- Recupera la lista dei generi da TMDB (`/genre/movie/list`)
- Mostra i generi come pulsanti o dropdown
- Al click su un genere, filtra la lista dei film per quel genere

### 5. **Collega la pagina alla navbar**
- Aggiungi un link "Tutti i film" nella tua navbar, che punti a `/movies`

---

## 🧪 Test
- Verifica che la pagina carichi i film
- Prova a cliccare una card e controlla che navighi correttamente
- Prova a usare i filtri per categoria

---

## ✅ Extra opzionali (dopo che funziona tutto)
- Caricamento "infinite scroll" o paginazione
- Ordina i film per voto o data
- Effetti di animazione sulle card con Framer Motion
- Loading skeleton durante il fetch

---

✍️ Usa questa pagina per tenere traccia delle cose completate o in lavorazione.
Spunta i passi o annota direttamente qui sotto:
