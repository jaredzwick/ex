import { Link } from "react-router-dom";
import {
  Database,
  Key,
  Container,
  FunctionSquare as Function,
  HardDrive,
  Shield,
  Book,
} from "lucide-react";

export function DocsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Book className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to integrate and use CloudStack services in your
          applications. Each service can be accessed via our CLI tool, REST API,
          or official SDKs.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/docs/databases"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-semibold">Databases</h2>{" "}
            </div>
            <p className="text-muted-foreground">
              Learn how to create, manage, and scale your managed databases.
            </p>
          </Link>

          <Link
            to="/docs/keyvalue"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Key className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold">Key-Value Store</h2>
            </div>
            <p className="text-muted-foreground">
              Implement high-performance key-value storage in your applications.
            </p>
          </Link>

          <Link
            to="/docs/containers"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Container className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-semibold">Containers</h2>
            </div>
            <p className="text-muted-foreground">
              Deploy and orchestrate containers across our global
              infrastructure.
            </p>
          </Link>

          <Link
            to="/docs/functions"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Function className="h-6 w-6 text-orange-500" />
              <h2 className="text-xl font-semibold">Edge Functions</h2>
            </div>
            <p className="text-muted-foreground">
              Build and deploy serverless functions at the edge.
            </p>
          </Link>

          <Link
            to="/docs/storage"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <HardDrive className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold">Object Storage</h2>
            </div>
            <p className="text-muted-foreground">
              Store and serve files with our distributed object storage.
            </p>
          </Link>

          <Link
            to="/docs/auth"
            className="block p-6 rounded-lg border hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-slate-500" />
              <h2 className="text-xl font-semibold">Authentication</h2>
            </div>
            <p className="text-muted-foreground">
              Implement secure user authentication and authorization.
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-4">
            To get started with CloudStack, install our CLI tool and configure
            your credentials:
          </p>
          <pre className="bg-background p-4 rounded-md">
            <code>{`# Install CloudStack CLI
npm install -g cloudstack-cli

# Configure credentials
cloudstack configure
API Key: your-api-key
Region: us-east-1

# Verify installation
cloudstack --version`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
