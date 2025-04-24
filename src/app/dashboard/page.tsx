"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <>
      <Header />
      <main className="container mx-auto pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
            <p className="text-gray-600">
              You are logged in as: <span className="font-medium">{user?.email}</span>
            </p>
          </div>
          
          <div className="mb-8 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">Account Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Email:</span> {user?.email}
              </li>
              <li>
                <span className="font-medium">Name:</span> {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
              </li>
              <li>
                <span className="font-medium">Account ID:</span> {user?.id?.substring(0, 8)}...
              </li>
            </ul>
          </div>
          
          <Button onClick={handleSignOut} variant="outline" className="w-full">
            Sign Out
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
} 