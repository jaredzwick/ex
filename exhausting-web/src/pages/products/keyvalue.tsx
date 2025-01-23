import { Link } from "react-router-dom";
import { Clock, Shield, Gauge, Workflow } from "lucide-react";
import { Button } from "../../components/ui/button";

export function KeyValueLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                High-Performance Key-Value Storage
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Lightning-fast, distributed key-value store for caching, session
                management, and real-time data access with sub-millisecond
                latency.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/keyvalue">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Create a new key-value store
$ Ex kv create cache-store \\
    --tier premium \\
    --replicas 3

✓ Store created successfully
✓ Endpoints configured
✓ Replication enabled`}</code>
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
              Built for Speed and Scale
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise features for demanding applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sub-ms Latency</h3>
              <p className="text-muted-foreground">
                Consistent sub-millisecond response times for read and write
                operations.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Replication</h3>
              <p className="text-muted-foreground">
                Automatic replication across multiple availability zones for
                high availability.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Workflow className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atomic Operations</h3>
              <p className="text-muted-foreground">
                Support for atomic operations and transactions with strong
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unmatched Performance</h2>
            <p className="text-xl opacity-90">
              Built for speed and reliability at any scale
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">&lt;1ms</div>
              <p className="opacity-90">Average Latency</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">Availability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1M+</div>
              <p className="opacity-90">Ops/Second</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-90">Edge Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Usage-Based Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Only pay for what you use with no upfront costs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-muted-foreground mb-4">
                For development and testing
              </p>
              <div className="text-3xl font-bold mb-6">
                $19
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>100K operations/day</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>1GB storage</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>2 replicas</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-purple-500 relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
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
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>1M operations/day</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>10GB storage</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>3 replicas</span>
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
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Unlimited operations</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Custom storage limits</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Priority support</span>
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
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with 100,000 free operations per month. No credit card
              required.
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-purple-500"
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
