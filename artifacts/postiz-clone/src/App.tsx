import { Component, Suspense, lazy, type ReactNode } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";

const Dashboard  = lazy(() => import("@/pages/Dashboard"));
const Landing    = lazy(() => import("@/pages/Landing"));
const Features   = lazy(() => import("@/pages/Features"));
const Pricing    = lazy(() => import("@/pages/Pricing"));
const Blog       = lazy(() => import("@/pages/Blog"));
const BlogPost   = lazy(() => import("@/pages/BlogPost"));
const AITools    = lazy(() => import("@/pages/AITools"));
const About      = lazy(() => import("@/pages/About"));
const Careers    = lazy(() => import("@/pages/Careers"));
const Privacy    = lazy(() => import("@/pages/Privacy"));
const Terms      = lazy(() => import("@/pages/Terms"));
const HelpCenter = lazy(() => import("@/pages/HelpCenter"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {[0,1,2].map(i => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#22c55e]/60 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "#0e0e0e", color: "#ff4ce2", padding: 40, fontFamily: "monospace", minHeight: "100vh" }}>
          <h2>Render Error</h2>
          <pre style={{ color: "#ccc", whiteSpace: "pre-wrap" }}>{(this.state.error as Error).message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function NotFound() {
  return (
    <div style={{ background: "#0e0e0e", color: "white", padding: 40, minHeight: "100vh" }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

function SwitcherButton() {
  const [location, navigate] = useLocation();
  const isDashboard = location === "/" || location === "";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "999px",
        padding: "4px",
        gap: "2px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "7px 16px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 600,
          transition: "all 0.2s",
          background: isDashboard ? "#22c55e" : "transparent",
          color: isDashboard ? "#000" : "rgba(255,255,255,0.45)",
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => navigate("/landing")}
        style={{
          padding: "7px 16px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 600,
          transition: "all 0.2s",
          background: !isDashboard ? "#22c55e" : "transparent",
          color: !isDashboard ? "#000" : "rgba(255,255,255,0.45)",
        }}
      >
        Website
      </button>
    </div>
  );
}

function Router() {
  return (
    <>
      <SwitcherButton />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/"           component={Dashboard} />
          <Route path="/landing"    component={Landing} />
          <Route path="/features"   component={Features} />
          <Route path="/pricing"    component={Pricing} />
          <Route path="/blog"       component={Blog} />
          <Route path="/blog/:id"   component={BlogPost} />
          <Route path="/ai-tools"   component={AITools} />
          <Route path="/about"      component={About} />
          <Route path="/careers"    component={Careers} />
          <Route path="/privacy"    component={Privacy} />
          <Route path="/terms"      component={Terms} />
          <Route path="/help"       component={HelpCenter} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") ?? ""}>
        <Router />
      </WouterRouter>
    </ErrorBoundary>
  );
}
