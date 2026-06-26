"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactForm } from "@/features/contact/components/ContactForm";
import type { SiteSettingsData } from "@/sanity/types";

interface ContactSectionProps {
  contact: SiteSettingsData;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-background-alt py-14 md:py-18">
      <Container>
        <SectionTitle
          subtitle={contact.contactSubtitle || "Get in Touch"}
          title={contact.contactHeading || "Let's Start a Conversation"}
          description={
            contact.contactDescription ||
            "Tell us about your project. We'll get back to you within 24 hours to schedule a complimentary consultation."
          }
        />

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
