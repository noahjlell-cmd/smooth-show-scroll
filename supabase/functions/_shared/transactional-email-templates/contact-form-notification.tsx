import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

const ContactFormNotificationEmail = ({
  name,
  email,
  company,
  service,
  message,
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'a website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={subtitle}>
          A new inquiry was submitted through dovetailstrategic.com
        </Text>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
        </Section>

        {company ? (
          <Section style={section}>
            <Text style={label}>Company</Text>
            <Text style={value}>{company}</Text>
          </Section>
        ) : null}

        {service ? (
          <Section style={section}>
            <Text style={label}>Service Interest</Text>
            <Text style={value}>{service}</Text>
          </Section>
        ) : null}

        <Section style={section}>
          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || '—'}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          Reply directly to this email to respond to {name || 'the sender'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New contact form submission${data?.name ? ` — ${data.name}` : ''}`,
  to: 'connect@dovetailswag.com',
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Smith',
    email: 'jane@acme.com',
    company: 'Acme Corp',
    service: 'brand-sourcing',
    message: 'Hi — interested in learning more about your brand sourcing services.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif',
}

const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 24px',
}

const h1 = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#0a0a0a',
  margin: '0 0 8px',
  letterSpacing: '-0.01em',
}

const subtitle = {
  fontSize: '13px',
  color: '#737373',
  margin: '0 0 24px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
}

const hr = {
  borderColor: '#e5e5e5',
  margin: '24px 0',
}

const section = {
  margin: '0 0 18px',
}

const label = {
  fontSize: '11px',
  color: '#737373',
  margin: '0 0 4px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  fontWeight: '600' as const,
}

const value = {
  fontSize: '15px',
  color: '#0a0a0a',
  margin: '0',
  lineHeight: '1.5',
}

const messageStyle = {
  fontSize: '15px',
  color: '#0a0a0a',
  margin: '0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
}

const footer = {
  fontSize: '12px',
  color: '#999999',
  margin: '24px 0 0',
  fontStyle: 'italic' as const,
}
