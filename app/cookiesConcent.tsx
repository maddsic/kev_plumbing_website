'use client';

import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_NAME = 'dunedin_cookie_consent';

const CookiesConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasCookie(COOKIE_NAME)) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie(COOKIE_NAME, 'accepted', { maxAge: 60 * 60 * 24 * 365 });
    setVisible(false);
  };

  const declineCookies = () => {
    setCookie(COOKIE_NAME, 'declined', { maxAge: 60 * 60 * 24 * 365 });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-[9999]"
        >
          <div className="mx-auto max-w-6xl m-4 rounded-3xl bg-white shadow-2xl border">
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
              {/* Text */}
              <p className="text-sm text-slate-600 leading-relaxed md:max-w-3xl">
                We use cookies to improve your experience, analyse traffic, and personalise content.
                By clicking <strong>Accept</strong>, you agree to our use of cookies. Read our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 underline hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={declineCookies}
                  className="
                    px-5 py-2 rounded-xl
                    border border-slate-300
                    text-slate-700
                    hover:bg-slate-100
                    transition
                  "
                >
                  Decline
                </button>

                <button
                  onClick={acceptCookies}
                  className="
                    px-6 py-2 rounded-xl
                    bg-blue-600 text-white
                    font-semibold
                    hover:bg-blue-500
                    transition
                  "
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesConsent;
