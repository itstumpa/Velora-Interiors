"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/features/contact/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Get in Touch"
          title="Let's Start a Conversation"
          description="Tell us about your project. We'll get back to you within 24 hours to schedule a complimentary consultation."
        />

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
