import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import LegalPage, {
  LegalLink,
  LegalList,
  LegalListItem,
  LegalSection,
} from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use | ClarifyData',
  description: 'Working terms for use of the current ClarifyData public website and enquiry forms.',
}

const COPPER = 'rgb(194, 89, 24)'
const CONTACT_EMAIL = 'Usman@geniusmindzone.com'

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Website terms"
      icon={<FileText className="w-4 h-4" style={{ color: COPPER }} />}
      title="Terms of Use"
      summary="These terms are drafted for the ClarifyData public marketing website, educational content, demo request form, and newsletter form as they exist today. They do not create access rights to an authenticated software platform or govern a paid service that is not currently offered through this website."
      lastUpdated="August 8, 2026"
      notice="The contracting entity, business address, governing law, courts, enforceability, liability allocation, age threshold, and any commercial service terms require confirmation and legal review before these terms are treated as final."
    >
      <LegalSection title="1. Acceptance">
        <p>
          By accessing or using this public website, you agree to these Terms of Use to the extent enforceable under applicable law. If you do not agree, do not use the website or submit its forms.
        </p>
        <p>
          The legal entity providing the website has not been confirmed in the code and must be identified in the final version of these terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Website purpose">
        <p>
          The website describes ClarifyData’s product direction and intended information-quality workflows, publishes educational material, and lets visitors submit demo and newsletter requests. Descriptions of capabilities, workflows, or intended outcomes are informational and do not guarantee present availability, integrations, accuracy, coverage, performance, or future delivery.
        </p>
        <p>
          Any future software access, trial, professional service, subscription, or customer data processing should be governed by separate written terms agreed with the confirmed entity.
        </p>
      </LegalSection>

      <LegalSection title="3. Permitted use">
        <p>You may browse and use the website for lawful personal or internal business evaluation, including:</p>
        <LegalList>
          <LegalListItem>Learning about the proposed ClarifyData workflows and focused markets.</LegalListItem>
          <LegalListItem>Reading and sharing links to the educational journal with appropriate attribution.</LegalListItem>
          <LegalListItem>Submitting a genuine demo request or newsletter subscription for yourself or an organization you are authorized to represent.</LegalListItem>
          <LegalListItem>Contacting the listed address about legitimate product, privacy, legal, or business questions.</LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Prohibited use">
        <p>You must not:</p>
        <LegalList>
          <LegalListItem>Use the website unlawfully, fraudulently, deceptively, or to harm another person or organization.</LegalListItem>
          <LegalListItem>Interfere with security or availability, introduce malware, probe for vulnerabilities without authorization, or bypass access controls.</LegalListItem>
          <LegalListItem>Use automated requests in a way that unreasonably burdens the website or form-delivery services.</LegalListItem>
          <LegalListItem>Impersonate another person, misrepresent your authority, submit spam, or provide information you have no right to disclose.</LegalListItem>
          <LegalListItem>Copy, modify, or exploit website content or branding in a way that infringes intellectual-property or other rights.</LegalListItem>
          <LegalListItem>Present educational content or proposed workflows as professional advice, regulatory approval, or a guaranteed outcome.</LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Intellectual property">
        <p>
          The website’s original text, design, branding, graphics, software, and other materials may be protected by copyright, trademark, and other laws. Except for limited use needed to browse and evaluate the website, no license is granted unless stated in writing by the rights holder.
        </p>
        <p>
          Third-party names, marks, links, and materials remain the property of their respective owners. Their appearance does not imply endorsement or integration.
        </p>
      </LegalSection>

      <LegalSection title="6. Demo and newsletter submissions">
        <p>
          The demo form currently accepts an industry selection and free-text description. The newsletter form accepts an email address. By submitting, you represent that the information is accurate enough for the request, that you are authorized to provide it, and that it does not contain unlawful, infringing, confidential, or sensitive information that should not be sent through a public form.
        </p>
        <p>
          A submission permits the information to be used to deliver and respond to the request as described in the Privacy Policy. Submission does not guarantee a response, meeting, subscription delivery, product access, or commercial relationship.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party services and links">
        <p>
          The website uses FormSubmit to forward demo and newsletter information by email and includes links to third-party websites. Third parties operate under their own terms, privacy practices, availability, and security controls. ClarifyData does not control and does not endorse third-party content merely by linking to it.
        </p>
      </LegalSection>

      <LegalSection title="8. No professional advice">
        <p>
          Website and journal content is general information, not medical, clinical, legal, regulatory, financial, tax, customs, safety, academic, or other professional advice. It should not be used to diagnose or treat any person or as the sole basis for a high-impact decision.
        </p>
        <p>
          Seek qualified professionals who can evaluate the complete facts, evidence, jurisdiction, and applicable duties before acting.
        </p>
      </LegalSection>

      <LegalSection title="9. Accuracy and availability">
        <p>
          Reasonable efforts may be made to keep the website useful, but content can be incomplete, outdated, unavailable, or contain errors. Educational material and product descriptions may change without notice. The website is provided on an “as available” basis to the extent permitted by law, without a promise that access will be uninterrupted or that any content will suit a particular purpose.
        </p>
      </LegalSection>

      <LegalSection title="10. Cautious limitation of responsibility">
        <p>
          To the maximum extent permitted by applicable law, the website provider should not be responsible for indirect or consequential loss arising solely from reliance on this public website, inability to access it, or use of third-party links. Any enforceable exclusions, caps, consumer protections, and exceptions for liability that cannot lawfully be limited must be determined for the confirmed entity and jurisdiction.
        </p>
        <p>
          Nothing in this working draft is intended to exclude responsibility that applicable law does not permit a provider to exclude.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to these terms">
        <p>
          These terms may be updated to reflect changes to the website, services, providers, or law. The updated date should be changed when revisions are posted. Material changes should be communicated where required, and separate agreement may be needed for future paid or data-processing services.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law and contact">
        <p>
          <strong className="text-white">Governing law and courts: [Owner and legal counsel must insert the confirmed jurisdiction and dispute forum.]</strong>
        </p>
        <p>
          Questions about these terms can be sent to <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>. The registered entity and business address must be added when confirmed.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
