import { Link } from "react-router-dom";
import { Shield, Upload, Download, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";

export function StorageLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Scalable Object Storage
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Store and serve files globally with high performance and
                durability. Perfect for applications of any size.
              </p>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link to="/docs/storage">
                  <Button variant="outline" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl transform -rotate-2" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <pre className="text-sm">
                  <code>{`# Create a storage bucket
$ Ex storage create assets \\
    --region global \\
    --class standard

✓ Bucket created
✓ CDN enabled
✓ CORS configured`}</code>
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
              Enterprise Storage Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for scalable file storage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card">
              <Globe className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
              <p className="text-muted-foreground">
                Serve files from 200+ edge locations with automatic caching.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Shield className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-muted-foreground">
                Built-in encryption, access controls, and versioning.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card">
              <Upload className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground">
                Fast uploads and downloads with multi-part transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Scale</h2>
            <p className="text-xl opacity-90">
              Built for reliability and performance
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="opacity-90">Edge Locations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.999%</div>
              <p className="opacity-90">Durability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10GB/s</div>
              <p className="opacity-90">Transfer Speed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">&lt;50ms</div>
              <p className="opacity-90">Global Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Storage Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Pay only for what you store and transfer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
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
                  <Download className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>$0.09/GB transfer</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Global availability</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Standard security</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-indigo-500 relative">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
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
                  <Download className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>$0.08/GB transfer</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Global CDN</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Advanced security</span>
                </li>
              </ul>
              <Button className="w-full">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">
                For large-scale storage
              </p>
              <div className="text-3xl font-bold mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Download className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Custom transfer rates</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Priority routing</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-indigo-500 mr-2" />
                  <span>Custom security</span>
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
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Storing Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Get 10GB free storage and 50GB transfer. No credit card required.
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
                  className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-500"
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
