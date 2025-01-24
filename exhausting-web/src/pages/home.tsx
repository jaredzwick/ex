import { Link } from "react-router-dom";
import {
  Database,
  Key,
  Container,
  FunctionSquare as Function,
  HardDrive,
  Shield,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Cloud Infrastructure Made Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Deploy, scale, and manage your applications with our
                  comprehensive cloud platform. From databases to edge
                  functions, we've got you covered.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/login">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link to="/docs">
                  <Button variant="outline" size="lg">
                    Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              <Link to="/databases" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Database className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Managed Databases</h3>
                  <p className="text-center text-gray-500">
                    Fully managed database solutions with automatic scaling and
                    backups.
                  </p>
                  <span className="text-blue-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>

              <Link to="/keyvalue" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Key className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Key-Value Store</h3>
                  <p className="text-center text-gray-500">
                    High-performance distributed key-value storage for your
                    applications.
                  </p>
                  <span className="text-purple-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>

              <Link to="/containers" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Container className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Container Platform</h3>
                  <p className="text-center text-gray-500">
                    Deploy and manage containers with our orchestration
                    platform.
                  </p>
                  <span className="text-green-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>

              <Link to="/functions" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Function className="h-12 w-12 text-orange-500" />
                  <h3 className="text-xl font-bold">Edge Functions</h3>
                  <p className="text-center text-gray-500">
                    Run serverless functions closer to your users at the edge.
                  </p>
                  <span className="text-orange-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>

              <Link to="/storage" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <HardDrive className="h-12 w-12 text-indigo-500" />
                  <h3 className="text-xl font-bold">Object Storage</h3>
                  <p className="text-center text-gray-500">
                    Scalable object storage for all your application objects
                    with an S3 compatible API.
                  </p>
                  <span className="text-indigo-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>

              <Link to="/auth" className="group">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Shield className="h-12 w-12 text-slate-500" />
                  <h3 className="text-xl font-bold">Authentication</h3>
                  <p className="text-center text-gray-500">
                    Secure user authentication and authorization platform.
                  </p>
                  <span className="text-slate-500 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-3xl font-bold">99.99%</h3>
                <p className="text-gray-500">Uptime SLA</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-500">Global Edge Locations</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-500">Expert Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <HardDrive className="h-6 w-6" />
              <span className="font-bold">Ex</span>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2024 Ex. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link to="/about" className="text-gray-500 hover:underline">
                About
              </Link>
              <Link to="/contact" className="text-gray-500 hover:underline">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:underline">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:underline">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
