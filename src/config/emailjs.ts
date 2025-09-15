// Configurazione EmailJS
// IMPORTANTE: Prima di utilizzare questo servizio, è necessario:
// 1. Creare un account su https://www.emailjs.com/
// 2. Configurare un servizio email (Gmail, Outlook, etc.)
// 3. Creare un template email
// 4. Sostituire le chiavi placeholder con quelle reali

export const emailjsConfig = {
  // ID del servizio EmailJS (da configurare su emailjs.com)
  serviceID: 'service_a5w5nfr',
  
  // ID del template email (da creare su emailjs.com)
  templateID: 'template_8gihywn',
  
  // Chiave pubblica EmailJS (da ottenere dal dashboard)
  // ATTENZIONE: Sostituire con la chiave reale
  publicKey: 'FDxWoMPtk309MNEtg',
  
  // Email di destinazione
  destinationEmail: 'capitalnet.web@gmail.com'
};

// Template suggerito per EmailJS:
/*
Oggetto: Nuova richiesta di contatto da {{from_name}}

Corpo dell'email:
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
*/