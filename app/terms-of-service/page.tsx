import { getPageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
  return getPageMetadata("/terms-of-service");
}

const TermsOfServicePage = () => {
  return (
    <article className="relative px-4 md:px-8 py-12 md:pt-[200px] pt-[150px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="md:text-[2.1rem] text-2xl font-bold leading-tight mb-8">
          Terms of Service
        </h1>

        <div
          className="[&>*]:mb-6 [&>p]:text-justify
          [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-2
          [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-3
          [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6
          prose prose-lg max-w-none bg-gray-100/50 md:px-16 md:py-10 p-5 rounded-3xl blogContent"
        >
          <p>
            Welcome to Zahads. By accessing or using our website, you agree
            to be bound by these Terms of Service (&quot;Terms&quot;). If you
            do not agree with any part of these Terms, please discontinue use
            of the website.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using Zahads, you acknowledge that you
            have read, understood, and agree to comply with these Terms and
            all applicable laws and regulations.
          </p>

          <h2>2. Use of the Website</h2>
          <p>You agree to use the website only for lawful purposes. You must not:</p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations.</li>
            <li>Attempt to gain unauthorized access to the website, its servers, or related systems.</li>
            <li>Distribute malware, viruses, or other harmful code.</li>
            <li>Interfere with the website&apos;s functionality or security.</li>
            <li>Copy, reproduce, or redistribute website content without prior written permission, except where permitted by law.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, all content on Zahads—including text,
            graphics, logos, images, videos, designs, and other materials—is
            owned by or licensed to Zahads and is protected by applicable
            copyright, trademark, and intellectual property laws.
          </p>
          <p>
            You may view and use the content for personal, non-commercial
            purposes only. Any unauthorized use is prohibited.
          </p>

          <h2>4. User Content</h2>
          <p>
            If you submit comments, feedback, inquiries, or other content
            through the website, you grant Zahads a non-exclusive,
            royalty-free, worldwide license to use, reproduce, and display
            that content for the purpose of operating and improving the
            website.
          </p>
          <p>
            You are responsible for ensuring that any content you submit does
            not infringe the rights of others or violate applicable laws.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may include links to third-party websites for your
            convenience. Zahads does not control or endorse these websites
            and is not responsible for their content, privacy practices, or
            availability. Your use of third-party websites is at your own
            risk.
          </p>

          <h2>6. Disclaimer</h2>
          <p>
            The information provided on Zahads is for general informational
            purposes only. While we strive to keep the information accurate
            and up to date, we make no warranties or representations
            regarding the accuracy, completeness, reliability, or suitability
            of the content.
          </p>
          <p>
            Your use of the website and its content is at your own risk.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Zahads and its owners,
            employees, affiliates, and partners shall not be liable for any
            direct, indirect, incidental, consequential, special, or punitive
            damages arising from or related to your use of, or inability to
            use, the website.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Zahads, its owners,
            employees, affiliates, and partners from any claims, damages,
            losses, liabilities, or expenses resulting from your violation of
            these Terms or your misuse of the website.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Your use of the website is also governed by our Privacy Policy,
            which explains how we collect, use, and protect your personal
            information.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time
            without prior notice. Changes become effective immediately upon
            publication on this page. Continued use of the website after
            changes are posted constitutes acceptance of the revised Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance
            with the laws applicable in the jurisdiction where Zahads
            operates, without regard to conflict of law principles.
          </p>

          <h2>12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the
            website, without prior notice, if we believe a user has violated
            these Terms or engaged in unlawful or harmful activity.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms of Service,
            please contact us through the contact information provided on
            the website&apos;s Contact page.
          </p>
        </div>
      </div>
    </article>
  );
};

export default TermsOfServicePage;
