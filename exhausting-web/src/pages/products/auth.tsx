import { Link } from "react-router-dom";
import { Shield, Key, Lock, UserCheck, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";

export function AuthLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Secure Authentication Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Add enterprise-grade authentication to your applications in
                minutes. Support multiple authentication methods with built-in
                security.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/auth">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-slate-500/10 rounded-3xl transform rotate-1" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Initialize authentication
$ Ex auth init \\
    --provider email \\
    --jwt-secret secure123 \\
    --callback https://app.example.com

✓ Auth service configured
✓ JWT signing ready
✓ Email provider setup`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Auth Solution</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for secure user authentication
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-factor Auth</h3>
              <p className="text-muted-foreground">
                Support for SMS, email, and authenticator app-based 2FA.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Key className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">OAuth Integration</h3>
              <p className="text-muted-foreground">
                Easy integration with popular OAuth providers.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Lock className="h-12 w-12 text-slate-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise SSO</h3>
              <p className="text-muted-foreground">
                Support for SAML and enterprise identity providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted Security</h2>
            <p className="text-xl opacity-90">
              Protecting millions of users worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10M+</div>
              <p className="opacity-90">Users Protected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50ms</div>
              <p className="opacity-90">Auth Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">0</div>
              <p className="opacity-90">Data Breaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Auth Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Scale your authentication needs as you grow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-4">
                For small applications
              </p>
              <div className="text-3xl font-bold mb-6">
                $29
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-slate-500 mr-2" />
                  <span>10K monthly active users</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Email authentication</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Basic security features</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-slate-500 relative">
              <div className="absolute top-0 right-0 bg-slate-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-4">For growing teams</p>
              <div className="text-3xl font-bold mb-6">
                $99
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-slate-500 mr-2" />
                  <span>100K monthly active users</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-slate-500 mr-2" />
                  <span>All auth methods</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Advanced security</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                For large organizations
              </p>
              <div className="text-3xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <UserCheck className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-slate-500 mr-2" />
                  <span>Enterprise security</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Application Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Add authentication in minutes. No credit card required.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
