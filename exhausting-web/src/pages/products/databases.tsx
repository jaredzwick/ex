import { Link } from "react-router-dom";
import { Shield, Zap, Globe, Scale } from "lucide-react";
import { Button } from "../../components/ui/button";

export function DatabasesLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Fully Managed Database Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Focus on your application while we handle database operations,
                scaling, and maintenance. Supports PostgreSQL, MySQL, and
                MongoDB with enterprise-grade reliability.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/databases">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Create a new database
$ Ex db create my-app-db \\
    --type postgresql \\
    --tier standard \\
    --region us-east

✓ Database created successfully
✓ Connection details available
✓ Automatic backups enabled`}</code>
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
            <h2 className="text-3xl font-bold mb-4">
              Enterprise-Grade Database Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for production-ready database deployments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatic Backups</h3>
              <p className="text-muted-foreground">
                Scheduled backups with point-in-time recovery and
                geo-replication for disaster recovery.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Scale className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Auto-scaling</h3>
              <p className="text-muted-foreground">
                Automatically scale compute and storage resources based on
                workload demands.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Globe className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Global Distribution
              </h3>
              <p className="text-muted-foreground">
                Deploy databases across multiple regions with automatic data
                synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Predictable Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Pay only for what you use with no hidden fees
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-muted-foreground mb-4">
                Perfect for development and testing
              </p>
              <div className="text-3xl font-bold mb-6">
                $29
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>2 vCPUs</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>4GB RAM</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>50GB Storage</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-4">
                For production applications
              </p>
              <div className="text-3xl font-bold mb-6">
                $99
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>4 vCPUs</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>16GB RAM</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>500GB Storage</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                For large-scale deployments
              </p>
              <div className="text-3xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Custom Resources</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-blue-500 mr-2" />
                  <span>SLA Guarantee</span>
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
      <section className="py-20">
        <div className="container">
          <div className="bg-blue-500 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Create your first database in minutes. No credit card required.
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-500"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
