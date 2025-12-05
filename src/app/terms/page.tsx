export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-slate-50">Terms of Service</h1>

        <p className="text-slate-400">
          By using Scheddy, you agree to the following terms. Please read them
          carefully before accessing our services.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Use of Service</h2>
        <p className="text-slate-400">
          Scheddy provides scheduling and communication tools for artists and
          studios. You agree to use the platform responsibly and follow all
          applicable laws.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">User Accounts</h2>
        <p className="text-slate-400">
          You are responsible for maintaining the confidentiality of your login
          credentials and all activity associated with your account.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Payments</h2>
        <p className="text-slate-400">
          Any paid features will be clearly disclosed. By subscribing, you agree to
          recurring billing where applicable.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Limitations</h2>
        <p className="text-slate-400">
          We do our best to keep Scheddy running smoothly, but we cannot guarantee
          uninterrupted service or error-free performance.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Contact Us</h2>
        <p className="text-slate-400">
          If you have any questions about these terms, reach us at{" "}
          <span className="text-slate-200">support@scheddy.com</span>.
        </p>
      </div>
    </div>
  );
}
