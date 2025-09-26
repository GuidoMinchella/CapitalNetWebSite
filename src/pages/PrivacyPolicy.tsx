import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La tua privacy è importante per noi. Scopri come proteggiamo e gestiamo i tuoi dati personali.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Introduzione */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduzione</h2>
                  <p className="text-gray-300 leading-relaxed">
                    CapitalNet S.r.l. (di seguito "CapitalNet", "noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. 
                    Questa Privacy Policy spiega come raccogliamo, utilizziamo, conserviamo e proteggiamo le tue informazioni quando utilizzi i nostri servizi.
                  </p>
                </div>
              </div>
            </div>

            {/* Dati che raccogliamo */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Dati che Raccogliamo</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p><strong>Dati di contatto:</strong> Nome, cognome, email, numero di telefono</p>
                    <p><strong>Dati aziendali:</strong> Nome dell'azienda, settore di attività, dimensioni aziendali</p>
                    <p><strong>Dati tecnici:</strong> Indirizzo IP, tipo di browser, sistema operativo</p>
                    <p><strong>Dati di utilizzo:</strong> Pagine visitate, tempo di permanenza, interazioni con il sito</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Come utilizziamo i dati */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Come Utilizziamo i Tuoi Dati</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>• <strong>Fornitura dei servizi:</strong> Per erogare i nostri servizi di consulenza e sviluppo</p>
                    <p>• <strong>Comunicazione:</strong> Per rispondere alle tue richieste e fornirti supporto</p>
                    <p>• <strong>Miglioramento:</strong> Per migliorare i nostri servizi e l'esperienza utente</p>
                    <p>• <strong>Marketing:</strong> Per inviarti informazioni sui nostri servizi (solo con il tuo consenso)</p>
                    <p>• <strong>Conformità legale:</strong> Per rispettare gli obblighi di legge</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Condivisione dei dati */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Condivisione dei Dati</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>Non vendiamo, affittiamo o condividiamo i tuoi dati personali con terze parti, eccetto nei seguenti casi:</p>
                    <p>• <strong>Fornitori di servizi:</strong> Partner fidati che ci aiutano a fornire i nostri servizi</p>
                    <p>• <strong>Obblighi legali:</strong> Quando richiesto dalla legge o dalle autorità competenti</p>
                    <p>• <strong>Protezione dei diritti:</strong> Per proteggere i nostri diritti, proprietà o sicurezza</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sicurezza */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Sicurezza dei Dati</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali:</p>
                    <p>• Crittografia dei dati in transito e a riposo</p>
                    <p>• Accesso limitato ai dati solo al personale autorizzato</p>
                    <p>• Monitoraggio continuo dei sistemi di sicurezza</p>
                    <p>• Backup regolari e piani di disaster recovery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* I tuoi diritti */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">I Tuoi Diritti</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>In conformità al GDPR, hai i seguenti diritti:</p>
                    <p>• <strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali</p>
                    <p>• <strong>Rettifica:</strong> Correggere dati inesatti o incompleti</p>
                    <p>• <strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati</p>
                    <p>• <strong>Limitazione:</strong> Limitare il trattamento dei tuoi dati</p>
                    <p>• <strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato</p>
                    <p>• <strong>Opposizione:</strong> Opporti al trattamento dei tuoi dati</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookie e Tecnologie Simili</h2>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>Utilizziamo cookie e tecnologie simili per:</p>
                    <p>• Migliorare la funzionalità del sito web</p>
                    <p>• Analizzare il traffico e l'utilizzo del sito</p>
                    <p>• Personalizzare la tua esperienza</p>
                    <p>Puoi gestire le preferenze dei cookie attraverso le impostazioni del tuo browser.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contatti */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Contattaci</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Per qualsiasi domanda riguardante questa Privacy Policy o per esercitare i tuoi diritti, contattaci:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:capitalnet.web@gmail.com" className="text-cyan-400 hover:text-cyan-300">capitalnet.web@gmail.com</a></p>
                  <p><strong>Telefono:</strong> <a href="tel:+393921658427" className="text-cyan-400 hover:text-cyan-300">392 165 8427</a></p>
                </div>
              </div>
            </div>

            {/* Aggiornamenti */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-4">Aggiornamenti della Privacy Policy</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Ci riserviamo il diritto di aggiornare questa Privacy Policy periodicamente. Ti informeremo di eventuali modifiche significative tramite email o attraverso un avviso sul nostro sito web.</p>
                <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;