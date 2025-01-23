import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/auth/login";
import { SignUpPage } from "./pages/auth/signup";
import { DashboardPage } from "./pages/dashboard";
import { DatabasesLandingPage } from "./pages/products/databases";
import { ContainersLandingPage } from "./pages/products/containers";
import { FunctionsLandingPage } from "./pages/products/functions";
import { StorageLandingPage } from "./pages/products/storage";
import { KeyValueLandingPage } from "./pages/products/keyvalue";
import { SettingsPage } from "./pages/settings";
import { BillingPage } from "./pages/billing";
import { ProfilePage } from "./pages/profile";
import { DocsPage } from "./pages/docs";
import { DatabasesDocPage } from "./pages/docs/databases";
import { KeyValueDocPage } from "./pages/docs/keyvalue";
import { PricingPage } from "./pages/pricing";
import { AuthLandingPage } from "./pages/products/auth";
import { FunctionsDocPage } from "./pages/docs/functions";
import { AuthDocPage } from "./pages/docs/auth";
import { StorageDocPage } from "./pages/docs/storage";
import { ContainersDocPage } from "./pages/docs/containers";

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/databases" element={<DatabasesLandingPage />} />
          <Route path="/containers" element={<ContainersLandingPage />} />
          <Route path="/functions" element={<FunctionsLandingPage />} />
          <Route path="/storage" element={<StorageLandingPage />} />
          <Route path="/keyvalue" element={<KeyValueLandingPage />} />
          <Route path="/auth" element={<AuthLandingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/databases" element={<DatabasesDocPage />} />
          <Route path="/docs/keyvalue" element={<KeyValueDocPage />} />
          <Route path="/docs/functions" element={<FunctionsDocPage />} />
          <Route path="/docs/auth" element={<AuthDocPage />} />
          <Route path="/docs/storage" element={<StorageDocPage />} />
          <Route path="/docs/containers" element={<ContainersDocPage />} />
        </Routes>
      </div>
    </Router>
  );
}
