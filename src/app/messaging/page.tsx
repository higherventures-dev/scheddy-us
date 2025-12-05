export default function MessagingPage() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-semibold text-slate-50">Messaging Policy</h1>

        <p className="text-slate-400">
          This page outlines how Scheddy uses SMS and messaging features. By opting
          in, you agree to the terms described below.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">How You Opt In</h2>
        <p className="text-slate-400">
          You may opt into messaging by providing your phone number through our
          website, booking system, or communication forms.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Message Frequency</h2>
        <p className="text-slate-400">
          Message frequency varies based on your activity, bookings, and account
          preferences.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Opt Out at Any Time</h2>
        <p className="text-slate-400">
          Text <span className="text-slate-200 font-semibold">STOP</span> to end
          messages. You will receive a confirmation message.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Help</h2>
        <p className="text-slate-400">
          Text <span className="text-slate-200 font-semibold">HELP</span> for
          assistance.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Message & Data Rates</h2>
        <p className="text-slate-400">
          Standard message and data rates may apply depending on your mobile
          carrier.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Data Use</h2>
        <p className="text-slate-400">
          Your phone number is used only for communication related to Scheddy. We
          do not sell or share messaging data with third parties.
        </p>

        <h2 className="text-xl font-semibold text-slate-100">Support</h2>
        <p className="text-slate-400">
          For help or questions about SMS messaging, contact us at{" "}
          <span className="text-slate-200">support@scheddy.us</span>.
        </p>
      </div>
    </div>
  );
}
