import { Cookie } from 'lucide-react'
import LegalPage, {
  LegalLink,
  LegalList,
  LegalListItem,
  LegalSection,
} from '@/components/LegalPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Cookie Policy', description: 'A code-informed working notice about cookies and similar technologies on the current Clarify Data website.', path: '/cookie-policy', noIndex: true })

const COPPER = 'rgb(194, 89, 24)'
const CONTACT_EMAIL = 'grow@clerifydata.com'

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Storage technologies"
      icon={<Cookie className="w-4 h-4" style={{ color: COPPER }} />}
      title="Cookie Policy"
      summary="The current Clarify Data application code does not intentionally set advertising, analytics, authentication-session, preference, or other non-essential cookies, and it does not use localStorage or sessionStorage. This page explains that finding and the limits of a code-only review."
      lastUpdated="August 8, 2026"
      notice="The production hosting configuration, network/security services, domain settings, and provider dashboards were not established from the application code. The owner should perform a production cookie and storage audit before treating this notice as final."
    >
      <LegalSection title="1. What cookies and similar technologies are">
        <p>
          Cookies are small data files that a website can store on a browser or device and read later. Similar technologies can include local storage, software development kits, pixels, tags, and device identifiers. They may support security, remember preferences, measure use, or enable advertising.
        </p>
        <p>
          Rules differ by location. For example, official UK guidance generally requires clear information and consent before non-essential cookies or similar technologies are activated, with limited exceptions for technologies that are strictly necessary to provide a service requested by the user. See the{' '}
          <LegalLink href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/">
            ICO guidance on cookies and similar technologies
          </LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="2. What the current website intentionally uses">
        <p>
          A search of the current application source found no code that intentionally reads or writes <code className="text-white">document.cookie</code>, <code className="text-white">localStorage</code>, or <code className="text-white">sessionStorage</code>. No advertising or analytics SDK such as Google Analytics, gtag, or PostHog was identified.
        </p>
        <p>
          The website also has no current account authentication flow, so it does not intentionally set an authentication-session cookie through application code.
        </p>
      </LegalSection>

      <LegalSection title="3. Strictly necessary infrastructure">
        <p>
          Hosting, content delivery, load balancing, abuse prevention, or security infrastructure may use strictly necessary cookies or similar request technologies even when they are not defined in the application repository. These can be needed to deliver pages, route traffic, maintain service integrity, or defend against malicious requests.
        </p>
        <p>
          The exact names, providers, purposes, and durations must be confirmed by auditing the deployed site and its production infrastructure. A strictly necessary label should only be used where the technology is genuinely essential for the requested service.
        </p>
      </LegalSection>

      <LegalSection title="4. Forms and FormSubmit">
        <p>
          When a visitor submits the demo form, the website sends the submitted information to FormSubmit through a server route for email delivery. FormSubmit and the surrounding hosting or network infrastructure may receive technical request information. The browser does not contact FormSubmit directly.
        </p>
        <p>
          Review the <LegalLink href="https://formsubmit.co/privacy.pdf">FormSubmit privacy information</LegalLink> for its own published practices. This policy does not claim that third-party websites opened through external links use no cookies.
        </p>
      </LegalSection>

      <LegalSection title="5. No intentional non-essential tracking identified">
        <LegalList>
          <LegalListItem>No intentional advertising or behavioral-targeting cookies were identified in the application code.</LegalListItem>
          <LegalListItem>No intentional non-essential analytics cookies or analytics SDKs were identified.</LegalListItem>
          <LegalListItem>No account authentication or workspace preference cookies were identified.</LegalListItem>
          <LegalListItem>No use of browser local storage or session storage was identified.</LegalListItem>
        </LegalList>
        <p>
          This statement describes the reviewed code as of the date above. It is not a substitute for checking the production website, response headers, hosting settings, tag managers, and provider dashboards.
        </p>
      </LegalSection>

      <LegalSection title="6. If non-essential technologies are added">
        <p>
          Before activating non-essential analytics, advertising, personalization, or similar technologies, the owner should identify the provider, data, purpose, duration, recipients, and legal requirements; update this policy; and implement an appropriate consent control where required. Non-essential technologies should not run before the required choice is made.
        </p>
      </LegalSection>

      <LegalSection title="7. Browser controls">
        <p>
          Most browsers let users view, block, or delete cookies and clear site data. Blocking strictly necessary technologies may cause some websites or security features to work incorrectly. Browser settings generally do not replace a website’s duty to obtain consent for non-essential technologies where law requires it.
        </p>
      </LegalSection>

      <LegalSection title="8. Updates and contact">
        <p>
          This policy should be reviewed whenever website code, hosting, analytics, forms, advertising, or other providers change. The “Last updated” date should be revised and users should be informed where required.
        </p>
        <p>
          Questions about cookies or storage technologies can be sent to <LegalLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</LegalLink>. The responsible legal entity and business address still require confirmation.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
