import { Component, Suspense, lazy, type ReactNode } from "react";
import { SignUpProvider } from "@/context/SignUpContext";
import { Switch, Route, Router as WouterRouter } from "wouter";

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
const Admin      = lazy(() => import("@/pages/Admin"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/earnstack-logo.png" alt="EarnStack" className="w-12 h-12 object-contain animate-pulse" />
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

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/"           component={Landing} />
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
        <Route path="/admin"      component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") ?? ""}>
        <SignUpProvider>
          <Router />
        </SignUpProvider>
      </WouterRouter>
    </ErrorBoundary>
  );
}
