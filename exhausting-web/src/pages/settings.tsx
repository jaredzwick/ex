import { useState } from "react";
import { Button } from "../components/ui/button";
import { Bell, Key, Lock, User, CreditCard, Shield } from "lucide-react";

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="flex gap-6">
        <div className="w-64">
          <nav className="space-y-1">
            {[
              { id: "general", name: "General", icon: User },
              { id: "security", name: "Security", icon: Shield },
              { id: "authentication", name: "Authentication", icon: Key },
              { id: "billing", name: "Billing", icon: CreditCard },
              { id: "notifications", name: "Notifications", icon: Bell },
              { id: "api", name: "API Keys", icon: Lock },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-3 w-full px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 space-y-6">
          {activeTab === "general" && (
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">
                  Organization Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      defaultValue="TechCorp Inc."
                      className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="admin@techcorp.com"
                      className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Resource Defaults</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">
                      Default Region
                    </label>
                    <select className="mt-1 block w-full rounded-md border border-input px-3 py-2">
                      <option>US East (N. Virginia)</option>
                      <option>US West (Oregon)</option>
                      <option>EU (Ireland)</option>
                      <option>Asia Pacific (Tokyo)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Resource Tags</label>
                    <input
                      type="text"
                      placeholder="key=value,environment=prod"
                      className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
