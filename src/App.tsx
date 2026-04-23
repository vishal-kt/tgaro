/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function App() {
  const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-rubik text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-100"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Header */}
      <header className="relative z-20 flex w-full items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {["Home", "About", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium tracking-wide transition-colors hover:text-brand-red"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="clip-corner bg-brand-red px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 leading-none">
          Contact Us
        </button>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex h-[calc(100vh-200px)] flex-col justify-start px-8 pt-24 md:px-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-[42px] font-bold uppercase leading-[1.1] tracking-[-0.04em] md:text-[64px]">
            Swift and Simple <br /> Transport
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8"
          >
            <button className="clip-corner bg-brand-red px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Bottom Widget (Glass Card) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-8 left-8 z-20 md:bottom-16 md:left-16"
      >
        <div 
          className="relative max-w-sm rounded-lg p-8 clip-corner"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Shine Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-50" />
          
          <h3 className="relative z-10 text-xl font-bold uppercase tracking-tight md:text-2xl">
            Book a Free Consultation
          </h3>
          <p className="mt-2 text-sm text-white/70">
            Talk to our experts today and optimize your logistics strategy.
          </p>
          
          <div className="mt-8">
            <button className="clip-corner flex w-full items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-neutral-200">
              <Phone size={18} fill="black" />
              Book a Call
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10H30L20 30L10 10Z"
          fill="white"
        />
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      <span className="text-2xl font-bold tracking-tight">targo</span>
    </div>
  );
}
