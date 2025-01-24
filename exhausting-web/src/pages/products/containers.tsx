import { Link } from "react-router-dom";
import { Container, Cpu, Network, Shield, Scale, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";

export function ContainersLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Container Orchestration Made Simple
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Deploy, scale, and manage containerized applications with ease.
                Built for developers who want powerful container orchestration
                without the complexity.
              </p>
              <div className="flex gap-4">
                <Link to="/login">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/containers">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/10 rounded-3xl transform rotate-2" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Deploy a containerized application
$ Ex containers deploy \\
    --image nginx:latest \\
    --replicas 3 \\
    --cpu 2 \\
    --memory 4Gi

✓ Deployment created
✓ Load balancer configured
✓ Health checks enabled`}</code>
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
              Enterprise Container Platform
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for production container workloads
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Scale className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Auto Scaling</h3>
              <p className="text-muted-foreground">
                Automatically scale containers based on CPU, memory, or custom
                metrics.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-muted-foreground">
                Built-in vulnerability scanning, RBAC, and network policies.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Globe className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Global Distribution
              </h3>
              <p className="text-muted-foreground">
                Deploy containers across multiple regions with automatic
                failover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Metrics</h2>
            <p className="text-xl opacity-90">
              Trusted by thousands of companies worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-90">Data Centers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5M+</div>
              <p className="opacity-90">Containers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">&lt;1s</div>
              <p className="opacity-90">Deploy Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Pay only for the resources you use
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-4">
                For small applications
              </p>
              <div className="text-3xl font-bold mb-6">
                $49
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Cpu className="h-4 w-4 text-green-500 mr-2" />
                  <span>4 vCPUs</span>
                </li>
                <li className="flex items-center">
                  <Network className="h-4 w-4 text-green-500 mr-2" />
                  <span>8GB RAM</span>
                </li>
                <li className="flex items-center">
                  <Container className="h-4 w-4 text-green-500 mr-2" />
                  <span>10 containers</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-green-500 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground mb-4">For growing teams</p>
              <div className="text-3xl font-bold mb-6">
                $199
                <span className="text-lg font-normal text-muted-foreground">
                  /mo
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Cpu className="h-4 w-4 text-green-500 mr-2" />
                  <span>16 vCPUs</span>
                </li>
                <li className="flex items-center">
                  <Network className="h-4 w-4 text-green-500 mr-2" />
                  <span>32GB RAM</span>
                </li>
                <li className="flex items-center">
                  <Container className="h-4 w-4 text-green-500 mr-2" />
                  <span>50 containers</span>
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
                  <Cpu className="h-4 w-4 text-green-500 mr-2" />
                  <span>Custom resources</span>
                </li>
                <li className="flex items-center">
                  <Network className="h-4 w-4 text-green-500 mr-2" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <Container className="h-4 w-4 text-green-500 mr-2" />
                  <span>Unlimited containers</span>
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
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Deploy your first container in minutes. No credit card required.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/login">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-green-500"
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
