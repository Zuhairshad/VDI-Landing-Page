import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import ShaderHero from '@/components/ShaderHero'
import SecurityCheckForm from './SecurityCheckForm'
import IndustryTabs from './IndustryTabs'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Business Data Security Check | Free Website Security Report',
  description:
    'Free business data security check for your website and customer portal. Get a written data protection report on encryption, access control, data leakage and breach risk.',
  alternates: { canonical: 'https://www.clerifydata.com/data-security-check' },
  openGraph: {
    type: 'website',
    siteName: 'Clarify Data',
    url: 'https://www.clerifydata.com/data-security-check',
    title: 'Business Data Security Check | Free Website Security Report',
    description:
      'A free external business data security check of your site or portal, with a written report emailed to you: what we found, how serious it is, and what to fix first.',
  },
}

const AMBER = 'rgb(224,133,76)'
const MUTED = 'rgba(250,250,250,0.62)'
const SUBTLE = 'rgba(250,250,250,0.08)'

export default function DataSecurityCheckPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <ShaderHero>
        <div className="mb-7">
          <span className="eyebrow-pill">Free Data Security Check</span>
        </div>
        <h1
          className="mb-6"
          style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1.1, color: 'rgb(250,250,250)' }}
        >
          Know what your website<br />already exposes
        </h1>
        <p
          className="mb-10 max-w-[620px]"
          style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(250,250,250,0.78)' }}
        >
          A free external security check of your site or customer portal. We look at what it shows the public, run the analysis, and email you a written report - severity-rated, in plain language.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="#free-check" className="button button-light" style={{ fontSize: '15px' }}>Get my free report</a>
          <a href="#what-we-check" className="button button-quiet" style={{ fontSize: '15px' }}>See what we check</a>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {['No software to install', 'No credentials needed', 'Written report by email', 'No obligation'].map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(250,250,250,0.7)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </ShaderHero>

      {/* ══════════════════════ WHAT IS ══════════════════════ */}
      <section id="what-is" className="content-section content-section-grid">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">The foundations</p>
            <h2>What business data security actually means</h2>
            <p>Most companies think about it one layer too late - asking whether the database is encrypted, when the real question is whether a spreadsheet export is sitting in a public folder on the marketing site.</p>
          </div>
          <div className="content-items">
            {[
              { label: 'Data security', body: 'Keeping information from being accessed, altered, or destroyed by anyone who should not be able to. Encryption, access control, backups, monitoring.' },
              { label: 'Data privacy', body: 'What you are allowed to collect and do with information about people, whether or not it is secure. Consent, purpose, retention, disclosure.' },
              { label: 'Data compliance', body: "Proving both of the above to a regulator, an auditor, or an enterprise customer's procurement team. Evidence, documentation, review records." },
              { label: 'Why SMBs are targeted', body: 'Automated scanning does not care how big you are. A small company with an unpatched plugin is a faster result than a bank with a dedicated security team.' },
              { label: 'Consequence vs likelihood', body: 'A larger organisation absorbs an incident. For a smaller one: customer notification, legal review, lost enterprise deals, and weeks rebuilding trust.' },
              { label: 'The gap that matters', body: 'Data does not leak because attackers are sophisticated. It leaks because something ordinary was left reachable - and nobody looked.' },
            ].map(({ label, body }) => (
              <article key={label} className="content-item">
                <h3>{label}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE CHECK ══════════════════════ */}
      <section id="what-we-check" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">12 check areas</p>
            <h2>What the free security check looks at</h2>
            <p>All observable from outside your systems. Each finding in your report maps back to one of these areas.</p>
          </div>

          {(() => {
            const checks = [
              { tag: 'Encryption in transit', title: 'Certificates & HTTPS', body: 'TLS versions, cipher suites, HSTS enforcement, mixed content, and pages still reachable over plain HTTP.' },
              { tag: 'Browser defences', title: 'Security headers', body: 'CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Missing headers turn a small injection into a stolen session.' },
              { tag: 'Exposure', title: 'Public files & endpoints', body: 'Exposed .env and .git directories, database dumps, backup archives, open directory listings, and admin panels on the open internet.' },
              { tag: 'Identity', title: 'Login & session handling', body: 'MFA availability, session cookie flags, login flows that leak account existence, and rate limiting on authentication.' },
              { tag: 'Access control', title: 'Who can reach your data', body: 'Unauthenticated API endpoints, file stores reachable without login, predictable record IDs in URLs, and public cloud buckets.' },
              { tag: 'Leakage', title: 'Personal data in the wrong place', body: 'Forms over HTTP, identifiers in URLs and referrer headers, customer data in client-side JS, and records in sitemaps.' },
              { tag: 'Third parties', title: 'Scripts, pixels & tag sprawl', body: 'Everything executing on your pages, what each one can read, subresource integrity, and vendors receiving undisclosed data.' },
              { tag: 'Consent', title: 'Cookies & compliance signals', body: "Non-essential cookies before consent, cookie lifetimes, and whether your policy matches your site's actual behaviour." },
              { tag: 'Impersonation', title: 'Email & domain spoofing', body: 'SPF, DKIM and DMARC enforcement, look-alike domain registrations, and dangling DNS entries.' },
              { tag: 'Known issues', title: 'Outdated components', body: 'Detectable CMS, framework, plugin and library versions matched against public vulnerability advisories.' },
              { tag: 'Perimeter', title: 'Infrastructure hygiene', body: 'Services exposed externally, dev environments alongside production, DNS configuration, and version headers.' },
              { tag: 'Resilience', title: 'Backup & recovery readiness', body: 'A short questionnaire on backup frequency, restore testing, retention periods, and audit logging - these cannot be observed externally.' },
            ]
            const left = checks.slice(0, 6)
            const right = checks.slice(6)

            const renderColumn = (items: typeof checks) => (
              <div className="flex flex-col items-center w-full gap-0.5">
                {items.map((item, i) => (
                  <div key={item.title} className="flex flex-col items-center w-full">
                    <div
                      className="w-full px-4 py-3 rounded-xl"
                      style={{
                        background: i === 0 ? 'rgba(194,89,24,0.15)' : 'rgba(250,250,250,0.03)',
                        border: `1px solid ${i === 0 ? 'rgba(194,89,24,0.35)' : 'rgba(250,250,250,0.07)'}`,
                      }}
                    >
                      <span style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AMBER, marginBottom: 3 }}>
                        {item.tag}
                      </span>
                      <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: i === 0 ? 'rgb(194,89,24)' : 'rgba(250,250,250,0.85)', letterSpacing: '-0.01em' }}>
                        {item.title}
                      </span>
                      <span style={{ display: 'block', fontSize: '12px', color: 'rgba(250,250,250,0.42)', lineHeight: 1.55, marginTop: 4 }}>
                        {item.body}
                      </span>
                    </div>
                    {i < items.length - 1 && (
                      <ArrowDown className="w-3.5 h-3.5 my-0.5" style={{ color: 'rgba(250,250,250,0.18)' }} />
                    )}
                  </div>
                ))}
              </div>
            )

            return (
              <div
                className="landscape-card rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(250,250,250,0.07)', padding: '36px 32px' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderColumn(left)}
                  <div style={{ borderLeft: '1px solid rgba(250,250,250,0.06)', paddingLeft: 24 }} className="hidden md:block">
                    {renderColumn(right)}
                  </div>
                  <div className="md:hidden">
                    {renderColumn(right)}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ══════════════════════ WHERE DATA LEAKS ══════════════════════ */}
      <section id="where-leaks" className="content-section content-section-split">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Root causes</p>
            <h2>Where business data actually leaks</h2>
            <p>None of these require a skilled attacker. All of them are visible from outside - which is exactly why a free external check finds them.</p>
          </div>
          <div className="content-items">
            {[
              { n: '01', title: 'Files nobody meant to publish', body: 'Database exports, invoice archives, customer lists, and config files with live credentials placed in a web folder during a migration - then forgotten. Search engines index them within days.' },
              { n: '02', title: 'Old environments left running', body: 'A staging site, a legacy subdomain, an abandoned campaign install. Outdated software, often holding a copy of real production data, almost never monitored.' },
              { n: '03', title: 'Access that was never revoked', body: 'Former staff accounts, shared admin logins, API keys committed to a repository, and integrations with far more permissions than they need.' },
              { n: '04', title: 'Third-party scripts over-collecting', body: 'Analytics, chat widgets, heatmaps, and tag managers execute with full page access. On a checkout page that can include form contents.' },
              { n: '05', title: 'Data in transit and in URLs', body: 'Forms over plain HTTP, personal identifiers as query parameters landing in server logs, browser history, and third-party referrer headers.' },
              { n: '06', title: 'Email domains anyone can spoof', body: 'Without enforced DMARC, an attacker sends convincing invoices that appear from your domain. The damage happens entirely outside your systems.' },
              { n: '07', title: 'People under time pressure', body: 'A reused password, a convincing login page, an urgent request approved without a second check. Controls decide how much one mistake costs - not whether mistakes happen.' },
            ].map(({ n, title, body }) => (
              <article key={n} className="content-item">
                <span className="step-number">{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section id="how-it-works" className="content-section content-section-steps">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">The process</p>
            <h2>How the free check works</h2>
            <p>Three steps. No installation, no credentials, no access to your systems. A person reviews the output before it reaches you.</p>
          </div>
          <div className="content-items">
            {[
              { n: '01', title: 'Submit your address', body: 'Enter your website or portal URL and a work email. We confirm domain ownership before anything runs - no check starts without that verification.' },
              { n: '02', title: 'We run the external check', body: 'Automated tooling collects evidence across the 12 areas. An analyst then reviews the output, removes false positives, and rates findings by actual data exposure risk.' },
              { n: '03', title: 'You receive a written report', body: 'Each finding arrives with its severity, the evidence we observed, what it means for your data in plain language, and a suggested fix. Yours to act on, with or without us.' },
            ].map(({ n, title, body }) => (
              <article key={n} className="content-item">
                <span className="step-number">{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SAMPLE REPORT ══════════════════════ */}
      <section id="sample-report" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Report format</p>
            <h2>What your report looks like</h2>
            <p>Every finding is written so a non-specialist understands the risk and a developer can act on it the same day.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${SUBTLE}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                  {['Finding', 'Severity', 'What it means for your data', 'Suggested fix'].map((h) => (
                    <th key={h} className="text-left px-5 py-4" style={{ color: 'rgba(250,250,250,0.4)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { finding: 'Database backup at a public path', sev: 'High', sc: { background: 'rgba(220,60,50,0.15)', color: 'rgb(255,140,130)', border: '1px solid rgba(220,60,50,0.4)' }, meaning: 'A complete copy of customer records downloadable by anyone who finds the filename. No login required.', fix: 'Remove the file, move backups to private storage, block archive extensions at the web server.' },
                  { finding: 'Session cookie missing Secure + SameSite', sev: 'High', sc: { background: 'rgba(220,60,50,0.15)', color: 'rgb(255,140,130)', border: '1px solid rgba(220,60,50,0.4)' }, meaning: 'A logged-in session can be captured on an untrusted network, giving an attacker the account without the password.', fix: 'Set Secure, HttpOnly and SameSite=Lax on session cookies. Force HTTPS site-wide.' },
                  { finding: 'Staging environment publicly indexed', sev: 'Medium', sc: { background: 'rgba(224,133,76,0.12)', color: 'rgb(224,133,76)', border: '1px solid rgba(224,133,76,0.4)' }, meaning: 'A second copy of the app - often with weaker credentials and real data - appearing in search results.', fix: 'Restrict staging by IP or basic auth and remove indexed pages.' },
                  { finding: 'Marketing scripts fire before consent', sev: 'Medium', sc: { background: 'rgba(224,133,76,0.12)', color: 'rgb(224,133,76)', border: '1px solid rgba(224,133,76,0.4)' }, meaning: 'Identifiers shared with third parties before visitors agree, conflicting with your published cookie policy.', fix: 'Gate non-essential tags behind the consent banner.' },
                  { finding: 'DMARC set to monitor only', sev: 'Medium', sc: { background: 'rgba(224,133,76,0.12)', color: 'rgb(224,133,76)', border: '1px solid rgba(224,133,76,0.4)' }, meaning: 'Your domain can be used in phishing aimed at customers and staff - messages still get delivered.', fix: 'Review DMARC reports, then move to quarantine and on to reject.' },
                  { finding: 'Server version in response headers', sev: 'Low', sc: { background: 'rgba(100,200,150,0.1)', color: 'rgb(120,210,165)', border: '1px solid rgba(100,200,150,0.3)' }, meaning: 'Tells an attacker exactly which software version to target. Shortens their reconnaissance.', fix: 'Suppress version banners in the web server configuration.' },
                ].map(({ finding, sev, sc, meaning, fix }) => (
                  <tr key={finding} style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                    <td className="px-5 py-4" style={{ color: 'rgb(250,250,250)', fontSize: '14px', verticalAlign: 'top', fontWeight: 500 }}>{finding}</td>
                    <td className="px-5 py-4" style={{ verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold" style={sc}>{sev}</span>
                    </td>
                    <td className="px-5 py-4" style={{ color: MUTED, fontSize: '13px', lineHeight: 1.65, verticalAlign: 'top' }}>{meaning}</td>
                    <td className="px-5 py-4" style={{ color: MUTED, fontSize: '13px', lineHeight: 1.65, verticalAlign: 'top' }}>{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4" style={{ color: 'rgba(250,250,250,0.35)', fontSize: '13px' }}>
            Illustrative extract only. The report also records what could not be checked and why.
          </p>
        </div>
      </section>

      {/* ══════════════════════ COMPARISON ══════════════════════ */}
      <section id="check-vs" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How it compares</p>
            <h2>Security check, vulnerability scan, or pen test?</h2>
            <p>These are not the same purchase. Choosing the wrong one wastes budget or produces a report nobody can act on.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${SUBTLE}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                  <th className="text-left px-5 py-4" style={{ color: 'rgba(250,250,250,0.4)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)', width: '20%' }}>&nbsp;</th>
                  {[['Data security check', true], ['Vulnerability scan', false], ['Penetration test', false]].map(([h, highlight]) => (
                    <th key={String(h)} className="text-left px-5 py-4" style={{ color: highlight ? AMBER : 'rgba(250,250,250,0.4)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)' }}>{String(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Question answered', cols: ['What is my data exposed to right now?', 'Which known software vulnerabilities exist?', 'Could an attacker actually get in?'] },
                  { label: 'Access needed', cols: ['None. External only.', 'Usually none, sometimes credentials.', 'Credentials, scope agreement, rules of engagement.'] },
                  { label: 'Human review', cols: ['Analyst rates every finding.', 'Largely automated, high false-positive rate.', 'Fully manual, highly skilled.'] },
                  { label: 'Output', cols: ['Prioritised findings in plain language.', 'A long technical list, often unfiltered.', 'Narrative of exploited paths and business impact.'] },
                  { label: 'Typical cost', cols: ['Free to low.', 'Low, often subscription.', 'Significant, project-based.'] },
                  { label: 'Best starting point', cols: ['Any business yet to assess data exposure.', 'Teams already patching regularly.', 'Mature products with a security programme.'] },
                ].map(({ label, cols }) => (
                  <tr key={label} style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                    <td className="px-5 py-4" style={{ color: 'rgba(250,250,250,0.5)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', verticalAlign: 'top' }}>{label}</td>
                    {cols.map((c, i) => (
                      <td key={i} className="px-5 py-4" style={{ color: i === 0 ? 'rgba(250,250,250,0.85)' : MUTED, fontSize: '13px', lineHeight: 1.65, verticalAlign: 'top', background: i === 0 ? 'rgba(224,133,76,0.03)' : 'transparent' }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BEST PRACTICES ══════════════════════ */}
      <section id="best-practices" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Security baseline</p>
            <h2>Business data security best practices</h2>
            <p>The working baseline we look for during a check - and the list your enterprise customers are asking about when they send a security questionnaire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0 56px' }}>
            {[
              { title: 'Know what data you hold', body: 'List every place customer and business data lives: databases, spreadsheets, shared drives, CRM, analytics, email, backups, contractor laptops. Record who owns each and how long it is kept.' },
              { title: 'Collect and keep less', body: 'Data you never collected cannot be breached. Review which form fields you genuinely use, set retention periods per type, and automate deletion. Data minimisation permanently reduces risk.' },
              { title: 'Encrypt in transit and at rest', body: 'HTTPS on every page - not just the homepage - with modern TLS and HSTS. Encryption at rest on databases, file storage, and backups. Keys managed separately from the data they protect.' },
              { title: 'Control access by role', body: 'Individual accounts, not shared logins. MFA on every admin, email, and cloud console. Revoke access the same day someone leaves. Quarterly review of who has access to what.' },
              { title: 'Separate environments', body: 'Staging and dev should never hold real customer data and should never be reachable without authentication. If you need realistic test data, mask or synthesise it.' },
              { title: 'Patch on a schedule', body: 'Track every CMS, framework, plugin, and library version. Subscribe to advisories. High severity within days, everything else monthly. Most exploited vulnerabilities had a fix available.' },
              { title: 'Test your backups', body: 'An untested backup is a belief, not a control. Restore to a clean environment on a schedule, time how long it takes, and keep at least one copy offline or immutable.' },
              { title: 'Log enough to reconstruct an incident', body: 'Authentication events, admin actions, permission changes, and data exports - retained long enough to answer what was accessed, by whom, and when.' },
              { title: 'Govern your third parties', body: 'List every vendor and script with data access, what each receives, and what your agreement says. Your customers\' data is your responsibility even when it sits in someone else\'s system.' },
              { title: 'Reassess after every change', body: 'New integration, subdomain, developer, marketing tool, or platform migration each changes your exposure. Security is a state you maintain, not a project you complete.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: '14px', padding: '22px 0', borderTop: '1px solid rgba(250,250,250,0.07)', alignItems: 'start' }}>
                <span style={{ marginTop: 3, width: 22, height: 22, borderRadius: '50%', background: 'rgba(224,133,76,0.1)', border: '1px solid rgba(224,133,76,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" aria-hidden>
                    <path d="M1.5 4l2.5 2.5 4-5" stroke="rgb(224,133,76)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: 600, color: 'rgb(250,250,250)', letterSpacing: '-0.02em' }}>{title}</p>
                  <p style={{ margin: 0, color: MUTED, fontSize: '13px', lineHeight: 1.65 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ INDUSTRIES ══════════════════════ */}
      <section id="industries" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">By industry</p>
            <h2>Data security looks different in every sector</h2>
            <p>The data at stake determines what counts as a serious finding. Clarify Data works across <Link href="/industries" style={{ color: AMBER }}>four industry contexts</Link>.</p>
          </div>
          <IndustryTabs />
        </div>
      </section>

      {/* ══════════════════════ WARNING SIGNS ══════════════════════ */}
      <section id="warning-signs" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Warning signals</p>
            <h2>Signs your data may already be exposed</h2>
            <p>Exposure is usually silent. Any one of these is a reason to run a check this week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0 56px' }}>
            {[
              { title: 'Emails that look like yours', body: 'Customers or staff receive messages that appear to come from your domain but were not sent by you - a direct sign of missing spoofing protection.' },
              { title: 'Unintended search results', body: 'Search results show pages you did not mean to publish: internal documents, staging pages, test accounts, or file listings.' },
              { title: 'No access inventory', body: "Nobody can produce a current list of who has administrative access, or of which third-party tools run on your website." },
              { title: 'Former staff still in systems', body: 'A previous employee or agency still appears in a system you have not audited since they left.' },
              { title: 'Unusual login activity', body: 'Login attempts spike against your admin or customer accounts, or support starts hearing about accounts behaving oddly.' },
              { title: 'Security questionnaire gaps', body: 'An enterprise prospect sends a security questionnaire and you cannot answer several sections honestly.' },
              { title: 'Unverified backups', body: 'Backups exist but have never been restored - so their contents and recovery time are both unknown.' },
              { title: 'Policy vs practice mismatch', body: 'Your privacy policy describes practices that no longer match the tools currently running on the site.' },
            ].map(({ title, body }, i) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '20px', padding: '26px 0', borderTop: '1px solid rgba(250,250,250,0.07)', alignItems: 'start' }}>
                <span style={{ fontSize: '38px', fontWeight: 700, letterSpacing: '-0.06em', color: 'rgba(224,133,76,0.2)', lineHeight: 1.05, fontVariantNumeric: 'tabular-nums' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ paddingTop: 4 }}>
                  <p style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 600, color: 'rgb(250,250,250)', letterSpacing: '-0.02em' }}>{title}</p>
                  <p style={{ margin: 0, color: MUTED, fontSize: '14px', lineHeight: 1.65 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(250,250,250,0.07)' }} />
        </div>
      </section>

      {/* ══════════════════════ DATA HANDLING ══════════════════════ */}
      <section id="data-handling" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Our practice</p>
            <h2>How Clarify Data handles your data</h2>
            <p>You are about to tell a company where your weak points are. That deserves an explicit answer - not a badge in a footer.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${SUBTLE}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                  <th className="text-left px-6 py-4" style={{ color: 'rgba(250,250,250,0.35)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)', width: '30%', whiteSpace: 'nowrap' }}>Practice</th>
                  <th className="text-left px-6 py-4" style={{ color: 'rgba(250,250,250,0.35)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)' }}>What it means in practice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: 'Ownership verified first', body: 'We confirm the domain is yours before any check begins. We decline requests we cannot verify.' },
                  { title: 'Passive by default', body: 'No exploitation, no credential guessing, no load testing, no changes to your systems. Anything active requires a separate written agreement.' },
                  { title: 'Least privilege', body: 'If a paid engagement needs access, we ask for the narrowest scope that does the job - time-limited and revocable by you.' },
                  { title: 'Named analysts only', body: 'Findings are visible only to the people working on your check, under confidentiality terms.' },
                  { title: 'Encrypted in transit and at rest', body: 'Data moves over TLS and is stored encrypted. Keys managed separately.' },
                  { title: 'Defined retention', body: 'Check evidence is deleted on a fixed schedule - and earlier on request.' },
                  { title: 'Never sold or published', body: 'Your findings are not shared with third parties, used as marketing material, or named in case studies without written permission.' },
                  { title: 'Human review where it matters', body: 'Uncertain or high-impact findings are escalated to an analyst before they reach your report.' },
                ].map(({ title, body }, i) => (
                  <tr key={title} style={{ borderBottom: i < 7 ? `1px solid ${SUBTLE}` : 'none' }}>
                    <td className="px-6 py-4" style={{ color: AMBER, fontWeight: 600, fontSize: '13px', verticalAlign: 'top', borderRight: `1px solid ${SUBTLE}` }}>{title}</td>
                    <td className="px-6 py-4" style={{ color: MUTED, fontSize: '14px', lineHeight: 1.7, verticalAlign: 'top' }}>{body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4" style={{ color: 'rgba(250,250,250,0.35)', fontSize: '13px' }}>
            Processing is covered by our <Link href="/privacy-policy" style={{ color: AMBER }}>Privacy Policy</Link> and <Link href="/dpa" style={{ color: AMBER }}>Data Processing Agreement</Link>.
          </p>
        </div>
      </section>

      {/* ══════════════════════ LIMITS ══════════════════════ */}
      <section id="limits" className="content-section">
        <div className="section-inner">
          <div className="limitations-panel" style={{ maxWidth: '790px', marginInline: 'auto' }}>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Be clear-eyed</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '14px' }}>What a free check cannot tell you</h2>
            <p className="critical-note" style={{ marginTop: 0, paddingTop: 0, border: 'none' }}>No security assessment proves data cannot be breached. Being clear about the boundary is part of the report.</p>
            <div style={{ display: 'grid', gap: '16px', marginTop: '28px' }}>
              {[
                { label: 'It sees the outside, not the inside', body: 'Logic flaws behind a login, permission errors between user roles, and insider misuse need authenticated testing.' },
                { label: 'It is a snapshot', body: 'A deployment tomorrow can reopen what was closed today. That is why monitoring exists as a separate service.' },
                { label: 'It does not cover your people', body: 'Most incidents begin with a convincing email, a reused password, or a well-meaning shortcut. Controls reduce damage; they do not remove cause.' },
                { label: 'It is not a legal opinion', body: 'We flag signals relevant to GDPR and CCPA. Compliance judgements remain with your counsel.' },
              ].map(({ label, body }) => (
                <div key={label} style={{ paddingLeft: '16px', borderLeft: `2px solid rgba(224,133,76,0.35)` }}>
                  <p style={{ color: 'rgb(250,250,250)', fontWeight: 600, fontSize: '15px', margin: '0 0 4px' }}>{label}</p>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PREMIUM SERVICES ══════════════════════ */}
      <section id="premium-services" className="content-section content-section-grid">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">After the report</p>
            <h2>Three ways we can help next</h2>
            <p>The free report is yours to act on. Many teams fix everything themselves. If you would rather not, scope and pricing follow the problem.</p>
          </div>
          <div className="content-items" style={{ gridTemplateRows: 'auto auto 1fr auto', alignItems: 'start' }}>
            {[
              { label: 'For teams that want findings closed', title: 'Fix', body: 'We work through findings with your developers or directly on your stack, in severity order, and re-check each item once deployed.', items: ['Prioritised remediation plan', 'Hands-on hardening: headers, TLS, cookies, exposed paths', 'Access and secrets clean-up', 'Verification re-check and closing report'] },
              { label: 'For teams holding sensitive customer data', title: 'Harden', body: 'A deeper review of how personal data moves through your product, including authenticated testing and the documentation enterprise customers ask for.', items: ['Authenticated and role-based access testing', 'Data flow and retention mapping', 'Encryption, key and backup restore review', 'Vendor and subprocessor assessment', 'DPA support and security questionnaire responses'] },
              { label: 'For teams that ship often', title: 'Monitor', body: 'Scheduled re-checks with alerts when something changes, so a fix that quietly regresses does not wait for the next annual review.', items: ['Recurring external checks', 'Change alerts on certificates, headers, DNS and exposed paths', 'Advisories matched to your detected stack', 'Quarterly review with a named analyst', 'Incident support on retainer'] },
            ].map(({ label, title, body, items }) => (
              <article key={title} className="content-item" style={{ display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 4', gap: 0, alignContent: 'start' }}>
                <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AMBER, marginBottom: '12px', lineHeight: 1.5, alignSelf: 'start' }}>{label}</span>
                <h3 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.03em', color: 'rgb(250,250,250)', alignSelf: 'start' }}>{title}</h3>
                <p style={{ margin: 0, color: MUTED, fontSize: '14px', lineHeight: 1.65, alignSelf: 'start' }}>{body}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 20, marginTop: 20, borderTop: '1px solid rgba(250,250,250,0.07)', alignSelf: 'start' }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 10, alignItems: 'start' }}>
                      <span style={{ marginTop: 3, width: 14, height: 14, borderRadius: '50%', background: 'rgba(224,133,76,0.12)', border: '1px solid rgba(224,133,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" aria-hidden><path d="M1 3l1.8 2L6 1" stroke="rgb(224,133,76)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span style={{ color: MUTED, fontSize: '13px', lineHeight: 1.55 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5" style={{ color: 'rgba(250,250,250,0.35)', fontSize: '13px' }}>
            Every proposal defines scope, access required, responsibilities, deliverables, limitations, and review checkpoints.
          </p>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section id="faq" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Common questions</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: '760px' }}>
            {[
              { q: 'Is the data security check really free?', a: 'Yes. The initial check and the written report are free. No card required, no obligation afterwards. Paid work only begins if you ask for a proposal and accept a written scope.' },
              { q: 'Do you need access to my servers or admin accounts?', a: 'No. The free check is external and non-intrusive. It looks at what your site or portal already exposes publicly. Anything requiring credentials or active testing happens only under a separate written agreement.' },
              { q: 'Will the check slow down or damage my website?', a: 'No. The check is passive and rate-limited. It does not attempt exploitation, password guessing, load testing, or changes of any kind. It behaves like a careful visitor reading what is publicly available.' },
              { q: 'How long does it take to receive the report?', a: 'Reports are usually emailed within three business days of a submission being verified. Larger portals with many subdomains can take longer - we will tell you if that applies.' },
              { q: 'What does the report actually contain?', a: 'A list of findings, each with a severity rating, a plain-language explanation of what it means for your data, the evidence we observed, and a suggested fix. It also records what we could not check and why.' },
              { q: 'Who sees the findings about my site?', a: 'The report is sent to the email address you submit. Internally it is limited to the analysts working on your check. We do not publish findings, sell them, or share them with third parties.' },
              { q: 'Can I request a check for a site I do not own?', a: 'No. You must own the domain or have written authorisation from the owner. We verify ownership before running a check.' },
              { q: 'How often should a business run a data security check?', a: 'At minimum once a year, and after any significant change: a platform migration, new integration, new marketing tool, developer leaving, or new subdomain going live.' },
              { q: 'Does a data security check help with GDPR or CCPA compliance?', a: "It supports compliance without replacing legal advice. The report flags observable signals relevant to those regimes - cookies before consent, undisclosed data sharing, personal data in URLs, and gaps between your published policy and actual site behaviour." },
              { q: 'We already have HTTPS and a firewall. Is a check still useful?', a: 'Usually yes. HTTPS and a firewall do not prevent the most common causes of exposure: a backup file in a reachable folder, a staging environment with real data, or an API endpoint returning records without authentication.' },
              { q: 'How much do premium services cost?', a: 'Scope determines price, so we quote after the free report and a short call. What moves the number: estate size, number of environments and integrations, whether authenticated testing is needed, and whether the work is one-off or recurring.' },
              { q: 'What should we do first if the report finds something serious?', a: 'Stop the exposure before investigating it. If a file or endpoint is publicly reachable, remove or restrict access immediately, then preserve logs before they rotate. Rotate any credentials that appeared in the exposed material.' },
            ].map(({ q, a }) => (
              <details key={q} className={styles.faqItem} style={{ borderBottom: `1px solid ${SUBTLE}` }}>
                <summary className="py-4 pr-10 relative" style={{ listStyle: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 500, color: 'rgb(250,250,250)' }}>
                  {q}
                </summary>
                <p className="pb-5" style={{ color: MUTED, fontSize: '15px', lineHeight: 1.75, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA WITH FORM ══════════════════════ */}
      <section
        id="free-check"
        className="content-section"
        style={{ background: 'radial-gradient(ellipse 110% 100% at 50% 110%, rgba(122,44,8,0.95), rgb(10,10,10) 65%)' }}
      >
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '34px 0' }}>
              <p className="eyebrow mb-5">Start with one address</p>
              <h2 style={{ margin: '0 0 20px', fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', fontWeight: 500, letterSpacing: '-0.045em', lineHeight: 1.08, color: 'rgb(250,250,250)' }}>
                Request your free security report
              </h2>
              <p style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75, marginBottom: '32px' }}>
                Give us the address of the site or portal that holds your customer data. We verify ownership, run the check, and email you a written report - severity-rated, in plain language, with suggested fixes.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Free - no card, no obligation',
                  'Written report emailed within three business days',
                  'Findings ranked by real data exposure risk',
                  'An honest account of what we could not see',
                ].map((item) => (
                  <li key={item} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, alignItems: 'start' }}>
                    <span style={{ marginTop: 3, width: 18, height: 18, borderRadius: '50%', background: 'rgba(224,133,76,0.12)', border: '1px solid rgba(224,133,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden><path d="M1 3.5l2 2 4-4" stroke="rgb(224,133,76)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span style={{ color: 'rgba(250,250,250,0.8)', fontSize: '15px', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8" style={{ color: 'rgba(250,250,250,0.38)', fontSize: '13px' }}>
                Prefer to talk first?{' '}
                <Link href="/#book-demo" style={{ color: AMBER }}>Book a short call</Link>
                {' '}or{' '}
                <Link href="/contact" style={{ color: AMBER }}>contact the team</Link>.
              </p>
            </div>
            <div className="demo-form-panel">
              <h3 style={{ margin: '0 0 6px', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.02em', color: 'rgb(250,250,250)' }}>
                Request your free report
              </h3>
              <p style={{ margin: '0 0 4px', fontSize: '13px', color: MUTED }}>One email, one address. We handle the rest.</p>
              <SecurityCheckForm id="cta" showConcern />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
