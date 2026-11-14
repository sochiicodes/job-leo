import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Link } from 'react-router-dom';



const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
    />
  </svg>
);

const Login = () => {
  // Credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // Profile fields
  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);



  const validateEmailCredentials = (): boolean => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      setLocalError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setResetSent(false);


    if (!validateEmailCredentials()) return;



    }
  
  return (
    <div className="flex bg-[#FAFAFA] h-screen justify-center  py-10 sm:py-32 px-4 sm:px-6">
      <div className="w-full max-w-105 mx-auto">

        {/* Minimal Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
          {/* Heading */}
              <div className="mb-6">
                <header className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-[#0B1220] tracking-tight"> Welcome back</h1>
                  <p className="text-brand-500 cursor-pointer hover:text-brand-600 transition-colors">
                    <Link to='/register'> <span className="text-xs">or</span> Register</Link>
                  </p>
                </header>
                <p className="text-sm text-[#64748B] mt-1">Sign in to continue to JobLeo.</p>
              </div>

          {/* Error Alert */}
          {/* {displayedError && step !== 'success' && (
            <div className="mb-5 bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{displayedError}</span>
            </div>
          )} */}

          {/* Password Reset Notice */}
          {/* {resetSent && step === 'auth' && activeTab === 'login' && (
            <div className="mb-5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#15803D]">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
              <span>
                Password reset email sent to <strong>{email.trim()}</strong>.
              </span>
            </div>
          )} */}

          {/* ALREADY SIGNED IN OR SUCCESS */}

          {/* STEP: COMPLETE PROFILE (New Google Sign-In User) */}
  

          {/* STEP: AUTH -> LOGIN TAB */}
           <div className="space-y-4">
              <button
                type="button"
                // onClick={handleGoogleLogin}
                // disabled={authLoading}
                className="w-full bg-white hover:bg-[#F8FAFC] text-[#0B1220] border border-[#E2E8F0] hover:border-[#CBD5E1] font-medium text-sm py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-60"
              >
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
            <div className="relative flex items-center py-1">
                <div className="grow border-t border-[#E2E8F0]" />
                <span className="shrink-0 mx-3 text-xs text-[#94A3B8]">or</span>
                <div className="grow border-t border-[#E2E8F0]" />
            </div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#475569] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={150}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/15 outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-[#475569]">
                      Password
                    </label>
                    <button
                      type="button"
                    //   onClick={handleForgotPassword}
                      className="text-xs font-medium text-[#16A34A] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/15 outline-none text-sm transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#475569] cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                //   disabled={authLoading}
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] disabled:opacity-60 text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                    <span>Log In</span>
                </button>
              </form>

            </div>
          

          {/* STEP: AUTH -> REGISTER TAB */}
  
        </div>

        {/* Quiet support footer link */}
        <p className="text-center text-xs text-[#94A3B8] mt-6">
          Need assistance?{' '}
          <a
            href="https://wa.me/2349128131343"
            target="_blank"
            rel="noreferrer"
            className="text-[#64748B] hover:text-[#0B1220] underline underline-offset-2"
          >
            Chat on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login