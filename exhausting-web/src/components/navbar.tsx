import { Link } from "react-router-dom";
import {
  Database,
  Key,
  Container,
  FunctionSquare as Function,
  HardDrive,
  Shield,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 md:container">
        <Link to="/" className="flex items-center space-x-2">
          <HardDrive className="h-6 w-6" />
          <span className="font-bold">CloudStack</span>
        </Link>

        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <Link
                      to="/databases"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Database className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Databases
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Managed database solutions for your applications
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/keyvalue"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <Key className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Key-Value Store
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        High-performance distributed key-value storage
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/containers"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <Container className="h-4 w-4" />
                        <span className="text-sm font-medium">Containers</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Container orchestration and management
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/functions"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <Function className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Edge Functions
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Serverless functions at the edge
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/storage"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <HardDrive className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Object Storage
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Scalable object storage for your data
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auth"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Authentication
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Secure user authentication platform
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/pricing"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/docs"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                Documentation
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link to="/login">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
