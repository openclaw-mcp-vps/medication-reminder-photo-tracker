import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSnap – Photo-based Medication Adherence Tracker',
  description: 'Use your phone camera to verify medication taking and track adherence patterns with AI-powered image recognition.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="00b98a71-1e66-4a0f-918a-f784f2be5bbe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
