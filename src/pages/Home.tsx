import React from 'react';
import { Hero } from '../components/Hero';
import { DigitalIdentitySection } from '../components/DigitalIdentitySection';
import { ServiceTable } from '../components/ServiceTable';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {
  return (
    <main className="pt-16">
      <Hero />
      <DigitalIdentitySection />
      <ServiceTable />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </main>
  );
};