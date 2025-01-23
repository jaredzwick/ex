import { Link } from "react-router-dom";
import { Zap, Globe, Shield, Gauge } from "lucide-react";
import { Button } from "../../components/ui/button";

export function FunctionsLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Serverless Edge Functions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Deploy code globally with zero infrastructure management. Run
                your functions closer to your users with automatic scaling.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/functions">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/10 rounded-3xl transform rotate-2" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Deploy a serverless function
$ Ex fn deploy image-resize \\
    --runtime node18 \\
    --memory 512 \\
    --timeout 30

✓ Function deployed
✓ Endpoints configured
✓ Auto-scaling enabled`}</code>
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
            <h2 className="text-3xl font-bold mb-4">Global Edge Network</h2>
            <p className="text-xl text-muted-foreground">
              Deploy and run functions at the edge in milliseconds
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Globe className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Global Distribution
              </h3>
              <p className="text-muted-foreground">
                Deploy functions to 50+ edge locations worldwide for minimal
                latency.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Zap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Scaling</h3>
              <p className="text-muted-foreground">
                Automatically scale from zero to thousands of concurrent
                executions.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Built-in Security</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with automatic SSL and DDoS
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Performance</h2>
            <p className="text-xl opacity-90">
              Built for global scale and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50ms</div>
              <p className="opacity-90">Avg. Latency</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-90">Edge Locations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1M+</div>
              <p className="opacity-90">Functions/Day</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple Usage-Based Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Pay only for what you use, with no upfront costs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-4">
                For development and testing
              </p>
              <div className="text-3xl font-bold mb-6">
                $29
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>1M invocations</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>128MB memory</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>10s timeout</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-orange-500 relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-4">
                For production workloads
              </p>
              <div className="text-3xl font-bold mb-6">
                $99
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>10M invocations</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>512MB memory</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>30s timeout</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                For large-scale applications
              </p>
              <div className="text-3xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>Unlimited invocations</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>Up to 3GB memory</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-orange-500 mr-2" />
                  <span>Custom timeouts</span>
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
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Deploy your first function in minutes. No credit card required.
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500"
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
