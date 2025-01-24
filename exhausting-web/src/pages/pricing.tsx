import { Link } from "react-router-dom";
import {
  Database,
  Key,
  Container,
  FunctionSquare as Function,
  HardDrive,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the right plan for your needs. All plans include a 14-day
              free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs for Each Service */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="space-y-20">
            {/* Databases */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Database className="h-8 w-8 text-blue-500" />
                <h2 className="text-2xl font-bold">Managed Databases</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Developer</h3>
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
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>2 vCPUs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>4GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>50GB Storage</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500 relative">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
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
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>4 vCPUs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>16GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>500GB Storage</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large-scale deployments
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Custom Resources</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>24/7 Support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      <span>SLA Guarantee</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Key-Value Store */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Key className="h-8 w-8 text-purple-500" />
                <h2 className="text-2xl font-bold">Key-Value Store</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
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
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>100K operations/day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>1GB storage</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>2 replicas</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-purple-500 relative">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
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
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>1M operations/day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>10GB storage</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>3 replicas</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large-scale applications
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>Unlimited operations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>Custom storage limits</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Containers */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Container className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl font-bold">Container Platform</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
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
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>4 vCPUs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>8GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>10 containers</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-green-500 relative">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <p className="text-muted-foreground mb-4">
                    For growing teams
                  </p>
                  <div className="text-3xl font-bold mb-6">
                    $199
                    <span className="text-lg font-normal text-muted-foreground">
                      /mo
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>16 vCPUs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>32GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>50 containers</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large organizations
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Custom resources</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>24/7 support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Unlimited containers</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Edge Functions */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Function className="h-8 w-8 text-orange-500" />
                <h2 className="text-2xl font-bold">Edge Functions</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
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
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>1M invocations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>128MB memory</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>10s timeout</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-orange-500 relative">
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
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
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>10M invocations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>512MB memory</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>30s timeout</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large-scale applications
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Unlimited invocations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Up to 3GB memory</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Custom timeouts</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Object Storage */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <HardDrive className="h-8 w-8 text-indigo-500" />
                <h2 className="text-2xl font-bold">Object Storage</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Standard</h3>
                  <p className="text-muted-foreground mb-4">
                    For general purpose storage
                  </p>
                  <div className="text-3xl font-bold mb-6">
                    $0.023
                    <span className="text-lg font-normal text-muted-foreground">
                      /GB/mo
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>$0.09/GB transfer</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Global availability</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Standard security</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-indigo-500 relative">
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance</h3>
                  <p className="text-muted-foreground mb-4">
                    For high-performance needs
                  </p>
                  <div className="text-3xl font-bold mb-6">
                    $0.03
                    <span className="text-lg font-normal text-muted-foreground">
                      /GB/mo
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>$0.08/GB transfer</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Global CDN</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Advanced security</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large-scale storage
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Custom transfer rates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Priority routing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>Custom security</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Shield className="h-8 w-8 text-slate-500" />
                <h2 className="text-2xl font-bold">Authentication</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
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
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>10K monthly active users</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Email authentication</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Basic security features</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-slate-500 relative">
                  <div className="absolute top-0 right-0 bg-slate-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <p className="text-muted-foreground mb-4">
                    For growing teams
                  </p>
                  <div className="text-3xl font-bold mb-6">
                    $99
                    <span className="text-lg font-normal text-muted-foreground">
                      /mo
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>100K monthly active users</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>All auth methods</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Advanced security</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-4">
                    For large organizations
                  </p>
                  <div className="text-3xl font-bold mb-6">Custom</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-slate-500 mr-2" />
                      <span>Enterprise security</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">
                Can I change plans at any time?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">
                Do you offer a free trial?
              </h3>
              <p className="text-muted-foreground">
                Yes, all plans come with a 14-day free trial. No credit card
                required to start.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and wire transfers for
                enterprise plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">
                Do you offer custom plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer custom enterprise plans for large organizations.
                Contact our sales team to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your 14-day free trial today. No credit card required.
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
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
