import { Shield, Terminal, Globe, Code } from "lucide-react";
import { Button } from "../../components/ui/button";

export function AuthDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="h-6 w-6 text-slate-500" />
        <h1 className="text-3xl font-bold">Authentication Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            CloudStack Authentication provides secure user authentication and
            authorization. Choose your preferred way to integrate:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage authentication from the command line.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full API access for auth operations.
              </p>
              <Button variant="outline" size="sm">
                API Reference
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Code className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">SDK</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native libraries for your preferred language.
              </p>
              <Button variant="outline" size="sm">
                View SDKs
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">CLI Usage</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Initialize authentication
$ cloudstack auth init \\
    --provider email \\
    --jwt-secret secure123 \\
    --callback https://app.example.com

# Create a user
$ cloudstack auth user create \\
    --email user@example.com \\
    --password secure123

# List users
$ cloudstack auth users list

# Create role
$ cloudstack auth role create admin \\
    --permissions "read:*, write:*"`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Sign up user
POST /api/v1/auth/signup
{
  "email": "user@example.com",
  "password": "secure123"
}

# Sign in user
POST /api/v1/auth/signin
{
  "email": "user@example.com",
  "password": "secure123"
}

# Get user profile
GET /api/v1/auth/profile
Authorization: Bearer {token}

# Update user
PATCH /api/v1/auth/users/{id}
{
  "displayName": "John Doe"
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">SDK Example (Node.js)</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`import { CloudStack } from '@cloudstack/sdk';

const client = new CloudStack({
  apiKey: process.env.CLOUDSTACK_API_KEY
});

// Sign up user
const user = await client.auth.signUp({
  email: 'user@example.com',
  password: 'secure123'
});

// Sign in user
const session = await client.auth.signIn({
  email: 'user@example.com',
  password: 'secure123'
});

// Get user profile
const profile = await client.auth.getProfile();

// Update user
await client.auth.updateUser(user.id, {
  displayName: 'John Doe'
});`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Multi-factor Authentication
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Enable and manage two-factor authentication.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Enable 2FA
$ cloudstack auth 2fa enable \\
    --user user@example.com

# Verify 2FA
$ cloudstack auth 2fa verify \\
    --code 123456`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Role-Based Access Control
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure roles and permissions.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Create role
$ cloudstack auth role create editor \\
    --permissions "read:*, write:posts"

# Assign role
$ cloudstack auth role assign \\
    --user user@example.com \\
    --role editor`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                OAuth Integration
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure OAuth providers.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Add OAuth provider
$ cloudstack auth provider add github \\
    --client-id xxx \\
    --client-secret xxx

# List providers
$ cloudstack auth providers list`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
