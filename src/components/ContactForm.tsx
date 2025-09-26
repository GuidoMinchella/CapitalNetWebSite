import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  contactPreference: 'call' | 'email';
  privacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    contactPreference: 'email',
    privacy: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Il nome è obbligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Il cognome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Il telefono è obbligatorio';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Inserisci un numero di telefono valido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve essere di almeno 10 caratteri';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Configurazione EmailJS
      const { serviceID, templateID, publicKey, destinationEmail } = emailjsConfig;
      
      // Prepara i dati per l'email
      const templateParams = {
        to_email: destinationEmail,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        contact_preference: formData.contactPreference === 'call' ? 'Telefono' : 'Email',
        reply_to: formData.email
      };

      // Invia l'email tramite EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      console.log('Email inviata con successo!');
      setIsSubmitted(true);
      
      // Reset form after success
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        contactPreference: 'email',
        privacy: false
      });
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      alert('Si è verificato un errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-900 rounded-2xl p-8 border border-green-500/20 text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-white mb-4">Messaggio inviato!</h3>
        <p className="text-gray-300">
          Grazie per averci contattato. Ti risponderemo al più presto tramite{' '}
          {formData.contactPreference === 'call' ? 'telefono' : 'email'}.
        </p>
      </div>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inizia il tuo{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              progetto digitale
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Compila il form per ricevere una consulenza gratuita personalizzata
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.firstName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="Il tuo nome"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-400">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Cognome *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.lastName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="Il tuo cognome"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-400">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Azienda (opzionale)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                placeholder="Nome della tua azienda"
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="la-tua-email@esempio.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                  placeholder="334 123 4567"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Messaggio *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200 resize-vertical ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-600 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
                placeholder="Descrivi il tuo progetto e i tuoi obiettivi..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Contact Preference */}
            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-300 mb-3">
                  Come preferisci essere ricontattato?
                </legend>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="ml-3 text-gray-300">Preferisco email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="call"
                      checked={formData.contactPreference === 'call'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="ml-3 text-gray-300">Preferisco essere richiamato</span>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Privacy */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  className={`w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-2 mt-1 ${
                    errors.privacy
                      ? 'border-red-500 focus:ring-red-500'
                      : 'focus:ring-cyan-500'
                  }`}
                />
                <span className="ml-3 text-sm text-gray-300">
                  Accetto il trattamento dei miei dati personali secondo la{' '}
                  <a href="#privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                    Privacy Policy
                  </a>{' '}
                  e acconsento ad essere ricontattato per finalità commerciali. *
                </span>
              </label>
              {errors.privacy && (
                <p className="mt-2 text-sm text-red-400">{errors.privacy}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                icon={Send}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
              </Button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Nota GDPR:</strong> I tuoi dati saranno utilizzati esclusivamente per rispondere alla tua richiesta 
              e non verranno condivisi con terze parti. Puoi richiedere la cancellazione in qualsiasi momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};