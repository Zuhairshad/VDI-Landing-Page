import { ShieldCheck } from 'lucide-react'
import LegalPage, {
  LegalLink,
  LegalList,
  LegalListItem,
  LegalSection,
} from '@/components/LegalPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Privacy Policy', description: 'A working privacy notice for the Clarify Data public website and demo request form.', path: '/privacy-policy', noIndex: true })

const COPPER = 'rgb(194, 89, 24)'
const CONTACT_EMAIL = 'grow@clerifydata.com'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy notice"
      icon={<ShieldCheck className="w-4 h-4" style={{ color: COPPER }} />}
      title="Privacy Policy"
      summary="This notice explains the limited information handled through the current Clarify Data public website and its demo request form. It does not describe user accounts, customer dataset uploads, or an authenticated platform because those features are not present in the current website code."
      lastUpdated="August 8, 2026"
      notice="The registered company entity, controller identity, business address, applicable legal bases, retention schedule, hosting details, international-transfer safeguards, and supervisory authority must be confirmed by the owner and legal counsel before this notice is treated as final."
    >
      <LegalSection title="1. Scope and who is responsible">
        <p>
          This policy applies to visitors who browse the public website or submit the “Book a Demo” form.
        </p>
        <p>
          The organization legally responsible for deciding how this information is used should be identified here as the data controller. The Clarify Data registered entity, address, and jurisdiction have not been established from the website code and require owner confirmation.
        </p>
      </LegalSection>

      <LegalSection title="2. Information the current website handles">
        <LegalList>
          <LegalListItem>
            <strong className="text-white">Demo requests:</strong> the work email, company name, selected industry, and free-text description entered by the visitor.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-white">Technical request information:</strong> hosting, network, and form-delivery infrastructure may process information such as IP address, user agent, request time, referring page, and diagnostic or security records when a page is requested or a form is submitted.
          </LegalListItem>
          <LegalListItem>
            <strong className="text-white">Correspondence:</strong> information included in later email or other communications with the contact shown on this site.
          </LegalListItem>
        </LegalList>
        <p>
          Do not include passwords, payment data, patient information, government identifiers, confidential customer data, or other sensitive information in the free-text demo field.
        </p>
      </LegalSection>

      <LegalSection title="3. How information is collected">
        <p>
          Demo information is supplied directly by the visitor. Technical information may be generated automatically by the visitor’s browser, network, hosting provider, security tools, and FormSubmit when they deliver pages or process a form request.
        </p>
      </LegalSection>

      <LegalSection title="4. Why information is used">
        <LegalList>
          <LegalListItem>To receive, review, and respond to a demo or product enquiry.</LegalListItem>
          <LegalListItem>To operate, secure, troubleshoot, and improve the public website and form-delivery process.</LegalListItem>
          <LegalListItem>To maintain appropriate business records and respond to lawful requests or disputes.</LegalListItem>
        </LegalList>
        <p>
          The final lawful basis for each purpose depends on the responsible entity and applicable law. Depending on those facts, it may include taking steps at a visitor’s request, legitimate interests in operating and securing the site, consent for electronic marketing where required, or compliance with law. The owner must confirm and document those bases.
        </p>
      </LegalSection>

      <LegalSection title="5. FormSubmit and other service providers">
        <p>
          The current website sends demo submissions to FormSubmit through a server route so the contents can be delivered by email to {CONTACT_EMAIL}. The browser does not submit directly to FormSubmit.
        </p>
        <p>
          FormSubmit therefore receives the submitted work email, company name, industry, and description and may receive related technical request information. Its current published terms describe its role in forwarding form information. Review the{' '}
          <LegalLink href="https://formsubmit.co/privacy.pdf">FormSubmit privacy information</LegalLink>{' '}
          before submitting.
        </p>
        <p>
          Hosting, email, network, and security providers may also process information as needed to provide their services. The final provider list and contractual roles require owner confirmation.
        </p>
      </LegalSection>

      <LegalSection title="6. Sharing and disclosure">
        <p>
          Information may be shared with the service providers needed to host the site, deliver form submissions, operate email, maintain security, or provide professional support. It may also be disclosed when reasonably necessary to comply with law, protect rights or safety, investigate abuse, or manage a business transaction, subject to applicable requirements.
        </p>
        <p>The website code does not show a sale of personal information or disclosure to advertising networks.</p>
      </LegalSection>

      <LegalSection title="7. Retention">
        <p>
          No fixed retention period is implemented or documented in the current website code. Form submissions may be retained in delivery records, recipient mailboxes, backups, and provider logs for periods controlled by the relevant organization or provider.
        </p>
        <p>
          The owner should adopt documented periods based on the purpose of the enquiry, whether a business relationship follows, legal obligations, security needs, and the need to establish or defend claims. Information should be deleted or anonymized when it is no longer reasonably needed, subject to lawful exceptions.
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          Reasonable technical and organizational safeguards should be selected for the nature and risk of the information processed. No internet transmission, email delivery, or storage method is completely secure.
        </p>
        <p>
          This notice does not claim specific encryption standards, security certifications, or audited controls because those details are not established by the current code. Visitors should avoid sending sensitive or confidential information through the public forms.
        </p>
      </LegalSection>

      <LegalSection title="9. International processing">
        <p>
          Hosting, network, FormSubmit, email, or support infrastructure may process information in countries other than the visitor’s own. Applicable transfer restrictions and safeguards depend on the confirmed providers, locations, responsible entity, and law. Those details require an owner-led vendor and transfer assessment.
        </p>
      </LegalSection>

      <LegalSection title="10. Privacy choices and requests">
        <p>
          Depending on applicable law, an individual may have rights to request access, correction, deletion, restriction, portability, or an objection to certain processing, and to withdraw consent where consent is the basis. Rights are not absolute and may be subject to verification and lawful exceptions.
        </p>
        <p>
          Requests can be sent to <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>. The responsible entity and any applicable supervisory-authority information must be added once confirmed.
        </p>
      </LegalSection>

      <LegalSection title="11. Children’s privacy">
        <p>
          The website and its business enquiry forms are not directed to children. Visitors should not submit information about a child through the demo description. If the responsible organization learns that it has received a child’s personal information without appropriate authorization, it should assess and address the record under applicable law.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes and contact">
        <p>
          This notice may be updated when the website, providers, processing activities, or legal requirements change. The revised date should be shown at the top, and material changes should be brought to affected people’s attention where required.
        </p>
        <p>
          Questions or privacy requests can be sent to <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>. This address is presented as the current website contact, not as a formally appointed Data Protection Officer.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
