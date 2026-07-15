import { getPageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
  return getPageMetadata("/privacy-policy");
}

const PrivacyPolicyPage = () => {
  return (
    <article className="relative px-4 md:px-8 py-12 md:pt-[200px] pt-[150px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="md:text-[2.1rem] text-2xl font-bold leading-tight mb-8">
          Privacy Policy
        </h1>

        <div
          className="[&>*]:mb-6 [&>p]:text-justify
          [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-2
          [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-3
          [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6
          prose prose-lg max-w-none bg-gray-100/50 md:px-16 md:py-10 p-5 rounded-3xl blogContent"
        >
          <p>
            At Zahads, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, store, and safeguard your information when you
            visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>

          <h3>Personal Information</h3>
          <p>
            When you contact us, subscribe to our newsletter, or submit a
            form, we may collect:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Any information you voluntarily include in your message</li>
          </ul>

          <h3>Non-Personal Information</h3>
          <p>
            We may automatically collect certain technical information,
            including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on the website</li>
            <li>Referral source</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to inquiries and customer support requests.</li>
            <li>Improve our website, services, and user experience.</li>
            <li>
              Send newsletters or promotional communications (only if you opt
              in).
            </li>
            <li>Analyze website performance and visitor behavior.</li>
            <li>
              Protect our website against fraud, abuse, and unauthorized
              access.
            </li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>Cookies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences.</li>
            <li>Improve website functionality.</li>
            <li>Measure website traffic and performance.</li>
            <li>Provide a better browsing experience.</li>
          </ul>
          <p>
            You can disable cookies through your browser settings, although
            some features of the website may not function properly.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use trusted third-party services such as analytics
            providers, marketing tools, payment processors, or hosting
            providers to operate our website. These providers may process
            your information only as necessary to provide their services and
            in accordance with their own privacy policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of internet transmission or electronic storage
            is completely secure.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of those
            third-party websites. We encourage users to review their privacy
            policies before providing any personal information.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We
            do not knowingly collect personal information from children. If
            you believe that a child has provided personal information,
            please contact us so we can promptly remove it.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict certain data processing.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            below.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will
            be posted on this page along with the revised effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us through the contact information
            provided on our website.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicyPage;
