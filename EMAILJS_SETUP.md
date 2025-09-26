# Configurazione EmailJS per il Form di Contatto

Questo documento spiega come configurare EmailJS per far funzionare il form di contatto del sito CapitalNet.

## Passaggi per la Configurazione

### 1. Creare un Account EmailJS
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Registrati per un account gratuito
3. Verifica la tua email

### 2. Configurare il Servizio Email
1. Nel dashboard di EmailJS, vai su **"Email Services"**
2. Clicca **"Add New Service"**
3. Scegli **Gmail** (o il provider email che preferisci)
4. Segui le istruzioni per collegare l'account `capitalnet.web@gmail.com`
5. Annota il **Service ID** generato (es. `service_abc123`)

### 3. Creare il Template Email
1. Vai su **"Email Templates"**
2. Clicca **"Create New Template"**
3. Usa questo template:

**Oggetto:**
```
Nuova richiesta di contatto da {{from_name}}
```

**Corpo dell'email:**
```
Hai ricevuto una nuova richiesta di contatto dal sito web CapitalNet.

Dettagli del contatto:
- Nome: {{from_name}}
- Email: {{from_email}}
- Azienda: {{company}}
- Telefono: {{phone}}
- Preferenza di contatto: {{contact_preference}}

Messaggio:
{{message}}

---
Rispondi direttamente a questa email per contattare il cliente.
```

4. Imposta l'email di destinazione: `capitalnet.web@gmail.com`
5. Salva e annota il **Template ID** (es. `template_xyz789`)

### 4. Ottenere la Chiave Pubblica
1. Vai su **"Account"** → **"General"**
2. Copia la **Public Key** (es. `user_AbCdEfGhIjKlMnOp`)

### 5. Aggiornare la Configurazione
Modifica il file `src/config/emailjs.ts` con i tuoi valori:

```typescript
export const emailjsConfig = {
  serviceID: 'il_tuo_service_id',        // Sostituisci con il Service ID
  templateID: 'il_tuo_template_id',      // Sostituisci con il Template ID
  publicKey: 'la_tua_public_key',        // Sostituisci con la Public Key
  destinationEmail: 'capitalnet.web@gmail.com'
};
```

### 6. Testare il Funzionamento
1. Riavvia il server di sviluppo (`npm run dev`)
2. Compila il form di contatto sul sito
3. Verifica che l'email arrivi a `capitalnet.web@gmail.com`

## Note Importanti

- **Account Gratuito**: EmailJS offre 200 email gratuite al mese
- **Sicurezza**: La Public Key può essere esposta nel frontend
- **Spam Protection**: EmailJS include protezione anti-spam
- **Personalizzazione**: Puoi personalizzare ulteriormente il template email

## Risoluzione Problemi

### Email non arrivano
1. Controlla la cartella spam
2. Verifica che il Service ID, Template ID e Public Key siano corretti
3. Controlla i log della console del browser per errori

### Errori di configurazione
1. Assicurati che l'account Gmail sia collegato correttamente
2. Verifica che il template sia pubblicato (non in bozza)
3. Controlla che la Public Key sia attiva

## Supporto
Per ulteriore assistenza, consulta la [documentazione ufficiale di EmailJS](https://www.emailjs.com/docs/).