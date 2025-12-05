export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-slate-50">Privacy Policy</h1>

        <p className="text-slate-400">
          At Scheddy, we take your privacy seriously. This policy explains what we
          collect, how we use it, and how we protect your information.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Information We Collect</h2>
        <p className="text-slate-400">
          We may collect your name, email address, phone number, and usage data from
          our website and app. This information is used to provide and improve our
          services.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">How We Use Your Information</h2>
        <p className="text-slate-400">
          Your information helps us deliver booking tools, notifications, updates,
          customer support, and marketing communications you opt into.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">How We Protect Data</h2>
        <p className="text-slate-400">
          We use industry-standard security, encryption, and access controls to keep
          your information safe.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Sharing of Information</h2>
        <p className="text-slate-400">
          We do not sell or share your personal information with third parties,
          except trusted providers who help us operate Scheddy.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Contact Us</h2>
        <p className="text-slate-400">
          If you have questions about this policy, email us at:{" "}
          <span className="text-slate-200">support@scheddy.com</span>
        </p>
      </div>
    </div>
  );
}
