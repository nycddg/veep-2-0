import { FormField as Field } from "@/components/site/rebuild/FormField";
import { Button } from "@/components/site/system/Controls";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Partner Sign In — Veep" },
      { name: "description", content: "Private sign-in for Veep operating partners." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Partner Sign In — Veep" },
      { property: "og:description", content: "Private sign-in for Veep operating partners." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) navigate({ to: "/portal/operator", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate({ to: "/portal/operator", replace: true });
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/portal/operator`,
            data: { full_name: fullName.trim() },
          },
        });
        if (error) throw error;
        if (!data.session) setNotice("Check your email to confirm your account, then sign in.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(
        /not on the Veep partner list|Database error saving new user/i.test(message)
          ? "This email isn't on the Veep partner list. Ask Veep for an invite."
          : message,
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rebuild ve-editorial ve-public ve-auth">
      <section className="ve-auth-panel">
        <div className="eyebrow">Partner access</div>
        <h1 className="mt-4 text-3xl text-cream tracking-tight">
          {mode === "signin" ? "Sign in to the partner dashboard" : "Create your partner account"}
        </h1>
        <p className="mt-3 text-sm text-stone">
          Access your Veep partner workspace. Access is by invitation only. Sign in with email and
          password.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {mode === "signup" && (
            <Field label="Full name">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
                maxLength={120}
                className={inputCls}
              />
            </Field>
          )}
          <Field label="Email">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              maxLength={255}
              className={inputCls}
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              className={inputCls}
            />
          </Field>

          {error && <p className="text-sm text-red-400">{error}</p>}
          {notice && <p className="text-sm text-accent">{notice}</p>}

          <Button type="submit" disabled={busy} className="ve-form-submit">
            {busy ? "Working…" : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <p className="mt-8 text-sm text-stone">
          {mode === "signin" ? "Invited but no account yet? " : "Already have an account? "}
          <button
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError(null);
              setNotice(null);
            }}
            className="text-cream underline underline-offset-4"
          >
            {mode === "signin" ? "Create one" : "Sign in"}
          </button>
        </p>
        <p className="mt-2 text-sm text-stone-soft">
          <Link to="/" className="underline underline-offset-4">
            Back to veep.work
          </Link>
        </p>
      </section>
    </div>
  );
}

const inputCls = "ve-input";
