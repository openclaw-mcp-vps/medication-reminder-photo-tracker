export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          AI-Powered Medication Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Never Miss a Dose Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl">
          Snap a photo of your medication. Our AI verifies you took it and builds your adherence history — perfect for chronic disease patients and caregivers.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-200"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['📸 Camera Verification', '🤖 AI Recognition', '📊 Adherence Dashboard', '🔔 Smart Reminders', '👨‍👩‍👧 Caregiver Sharing'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">Everything you need to stay on track.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff]">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$8</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited photo verifications',
              'AI-powered pill recognition',
              'Visual adherence dashboard',
              'Daily & weekly reminders',
              'Caregiver access sharing',
              'Export reports as PDF',
              'Real-time sync across devices',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does photo verification work?</h3>
            <p className="text-[#8b949e] text-sm">You take a photo of your medication using your phone camera. Our AI analyzes the image to confirm the correct pills are present and logs the dose with a timestamp to your adherence record.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can caregivers monitor my adherence?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can invite caregivers or family members to view your adherence dashboard in real time, so they can offer support without needing to be physically present.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my health data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. All photos and health data are encrypted in transit and at rest. We never sell your data and you can delete your account and all associated data at any time.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-[#8b949e] text-sm border-t border-[#30363d]">
        © {new Date().getFullYear()} MedSnap. All rights reserved.
      </footer>
    </main>
  )
}
