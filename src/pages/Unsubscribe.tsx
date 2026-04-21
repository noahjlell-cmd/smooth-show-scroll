import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey: supabaseAnonKey },
    })
      .then(async (r) => {
        const data = await r.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("invalid"));
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else {
        setErrorMsg("Unable to process your request.");
        setState("error");
      }
    } catch (e: any) {
      setErrorMsg(e?.message ?? "Something went wrong.");
      setState("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "hsl(0 0% 98%)" }}>
      <div className="max-w-md w-full text-center">
        <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "hsl(0 0% 50%)" }}>
          Email Preferences
        </p>

        {state === "loading" && (
          <h1 className="text-2xl font-bold" style={{ color: "hsl(0 0% 8%)" }}>
            Verifying…
          </h1>
        )}

        {state === "valid" && (
          <>
            <h1 className="text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
              Unsubscribe?
            </h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(0 0% 45%)" }}>
              Click below to stop receiving emails from Dovetail Strategic.
            </p>
            <button
              onClick={handleConfirm}
              className="px-10 py-4 text-xs tracking-widest uppercase font-medium border transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "hsl(0 0% 20%)", color: "hsl(0 0% 8%)", background: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 8%)";
                (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 98%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 8%)";
              }}
            >
              Confirm Unsubscribe
            </button>
          </>
        )}

        {state === "submitting" && (
          <h1 className="text-2xl font-bold" style={{ color: "hsl(0 0% 8%)" }}>
            Processing…
          </h1>
        )}

        {state === "success" && (
          <>
            <h1 className="text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
              You're unsubscribed
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
              You will no longer receive emails from Dovetail Strategic.
            </p>
          </>
        )}

        {state === "already" && (
          <>
            <h1 className="text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
              Already unsubscribed
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
              This email address has already been unsubscribed.
            </p>
          </>
        )}

        {state === "invalid" && (
          <>
            <h1 className="text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
              Invalid link
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
              This unsubscribe link is invalid or has expired.
            </p>
          </>
        )}

        {state === "error" && (
          <>
            <h1 className="text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 8%)" }}>
              Something went wrong
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
              {errorMsg || "Please try again later."}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
