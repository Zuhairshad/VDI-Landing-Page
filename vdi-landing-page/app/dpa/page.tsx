import type { Metadata } from 'next'
import { Lock } from 'lucide-react'
import LegalPage, {
  LegalLink,
  LegalList,
  LegalListItem,
  LegalSection,
} from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Data Processing Information & DPA Requests | ClarifyData',
  description:
    'Information about when a data processing agreement may be needed and how to request customer-specific terms from ClarifyData.',
}

const COPPER = 'rgb(194, 89, 24)'
const CONTACT_EMAIL = 'Usman@geniusmindzone.com'

export default function DpaPage() {
  return (
    <LegalPage
      eyebrow="Data processing information"
      icon={<Lock className="w-4 h-4" style={{ color: COPPER }} />}
      title="Request a Data Processing Agreement"
      summary="This page explains the purpose and typical contents of a data processing agreement (DPA). It is not a DPA, is not signed, and does not create a controller–processor relationship merely because someone views or uses the public website."
      lastUpdated="August 8, 2026"
      notice="A binding DPA requires the confirmed ClarifyData legal entity, customer identity, service description, jurisdiction, processing details, security measures, subprocessors, transfer mechanism, retention instructions, liability terms, and authorized signatures. None of those customer-specific terms should be inferred from this page."
    >
      <LegalSection title="1. What a DPA is">
        <p>
          A DPA is a written agreement that governs one party’s processing of personal data on behalf of another. Depending on the law and arrangement, it can document instructions, responsibilities, safeguards, assistance, and what happens to personal data when the service ends.
        </p>
        <p>
          For example, GDPR Article 28 requires a binding controller–processor contract to describe the processing and include specified processor duties. See the official{' '}
          <LegalLink href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02016R0679-20160504">
            text of Regulation (EU) 2016/679, Article 28
          </LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="2. When a DPA may be required">
        <p>
          A DPA may be needed when a customer engages a provider to process personal data on the customer’s documented instructions. Whether it is required depends on the actual service, the parties’ roles, the data, the people concerned, processing locations, and applicable law.
        </p>
        <p>
          Browsing this public website or sending an ordinary business enquiry does not by itself establish that ClarifyData is acting as the visitor’s processor. A proposed product trial, customer dataset workflow, or other service must be assessed separately before personal data is supplied.
        </p>
      </LegalSection>

      <LegalSection title="3. Controller and processor roles">
        <p>
          A controller generally determines why and how personal data is processed. A processor generally handles personal data on behalf of a controller and under documented instructions. The same organization can have different roles for different activities.
        </p>
        <p>
          The parties must determine and document their roles from the real service arrangement. This page does not declare ClarifyData a processor for every interaction and does not shift a customer’s responsibility for lawful collection, instructions, notices, rights handling, or high-impact decisions.
        </p>
      </LegalSection>

      <LegalSection title="4. Customer-specific processing details are required">
        <p>A usable DPA and its processing schedule should identify, at minimum:</p>
        <LegalList>
          <LegalListItem>The subject matter and duration of processing.</LegalListItem>
          <LegalListItem>The nature and purpose of each processing activity.</LegalListItem>
          <LegalListItem>The categories of personal data, including whether sensitive or special-category data is involved.</LegalListItem>
          <LegalListItem>The categories of data subjects whose information will be processed.</LegalListItem>
          <LegalListItem>The customer’s documented instructions and each party’s rights and obligations.</LegalListItem>
          <LegalListItem>The approved processing and storage locations, retention periods, and deletion or return instructions.</LegalListItem>
        </LegalList>
        <p>
          These facts cannot be responsibly completed as generic website copy. They must be agreed for the customer and service before processing begins.
        </p>
      </LegalSection>

      <LegalSection title="5. Typical contractual topics">
        <p>Depending on the law and arrangement, a DPA commonly addresses:</p>
        <LegalList>
          <LegalListItem>Processing only on documented instructions and notification if an instruction appears unlawful.</LegalListItem>
          <LegalListItem>Confidentiality commitments for authorized personnel.</LegalListItem>
          <LegalListItem>Technical and organizational security measures appropriate to the agreed risk.</LegalListItem>
          <LegalListItem>Authorization, notice, and flow-down terms for subprocessors.</LegalListItem>
          <LegalListItem>Approved international-transfer locations and safeguards.</LegalListItem>
          <LegalListItem>Assistance with data-subject rights requests.</LegalListItem>
          <LegalListItem>Security-incident notification and support responsibilities.</LegalListItem>
          <LegalListItem>Assistance with impact assessments or regulator consultation where applicable.</LegalListItem>
          <LegalListItem>Deletion or return of personal data at the end of the service, subject to lawful retention.</LegalListItem>
          <LegalListItem>Information and audit arrangements needed to demonstrate compliance.</LegalListItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Security measures need a real service design">
        <p>
          Security commitments should match the data, architecture, access model, providers, locations, and risks of the actual service. A DPA may attach a schedule describing access control, confidentiality, resilience, recovery, testing, incident response, deletion, and other measures where applicable.
        </p>
        <p>
          This page does not promise particular encryption standards, certifications, audit reports, data residency, or zero-retention behavior because those facts are not established by the current public website code.
        </p>
      </LegalSection>

      <LegalSection title="7. Subprocessors and international transfers">
        <p>
          A customer-specific assessment should identify every relevant hosting, email, support, infrastructure, and processing provider; the service each performs; its processing location; and the mechanism used for any restricted transfer.
        </p>
        <p>
          The current public forms use FormSubmit for email delivery, but a future customer service may use a different architecture. The final subprocessor list and transfer terms must reflect the service actually purchased and deployed.
        </p>
      </LegalSection>

      <LegalSection title="8. How to request the appropriate agreement">
        <p>
          Send a request to <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink> before providing customer personal data. Include enough non-sensitive information to scope the discussion:
        </p>
        <LegalList>
          <LegalListItem>Customer legal name, contact, and relevant jurisdiction.</LegalListItem>
          <LegalListItem>Proposed ClarifyData service, use case, and expected duration.</LegalListItem>
          <LegalListItem>Categories and approximate volume of personal data and data subjects.</LegalListItem>
          <LegalListItem>Whether health, biometric, children’s, financial, employment, or other sensitive data is involved.</LegalListItem>
          <LegalListItem>Required locations, retention or deletion instructions, security requirements, and vendor-review materials.</LegalListItem>
        </LegalList>
        <p>
          Do not send sample personal data, patient information, credentials, or confidential datasets in the initial request.
        </p>
      </LegalSection>

      <LegalSection title="9. Details still requiring confirmation">
        <p>
          The registered ClarifyData entity, business address, governing law, signing authority, service architecture, security schedule, approved subprocessors, transfer terms, incident commitments, audit process, liability allocation, and final deletion or return terms all require owner, technical, customer, and legal confirmation.
        </p>
      </LegalSection>

      <LegalSection title="10. No agreement by page view">
        <p>
          Viewing, linking to, or submitting a request through this page does not execute a DPA, amend any contract, or authorize ClarifyData to process customer personal data. A DPA becomes effective only when the correct agreement is completed and accepted by authorized parties in the manner stated in that agreement.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
