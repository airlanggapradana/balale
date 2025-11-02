"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type User = {
  name?: string;
  email: string;
  password: string;
};

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

const AuthPage = () => {
  const router = useRouter();

  // Sign-in state
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signinMessage, setSigninMessage] = useState<string | null>(null);

  // Sign-up state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState<string | null>(null);

  const readUsers = (): User[] => {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? (JSON.parse(raw) as User[]) : [];
    } catch {
      return [];
    }
  };

  const writeUsers = (users: User[]) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const setCurrentUser = (user: User | null) => {
    if (user) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(CURRENT_USER_KEY);
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSigninMessage(null);

    const users = readUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === signinEmail.toLowerCase() &&
        u.password === signinPassword,
    );

    if (!found) {
      setSigninMessage("Email or password is incorrect.");
      return;
    }

    setCurrentUser(found);
    setSigninMessage("Signed in successfully.");
    // navigate to home or refresh
    router.push("/");
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupMessage(null);

    if (signupPassword.length < 6) {
      setSignupMessage("Password must be at least 6 characters.");
      return;
    }

    const users = readUsers();
    const exists = users.some(
      (u) => u.email.toLowerCase() === signupEmail.toLowerCase(),
    );
    if (exists) {
      setSignupMessage("An account with this email already exists.");
      return;
    }

    const newUser: User = {
      name: signupName.trim() || undefined,
      email: signupEmail,
      password: signupPassword,
    };

    users.push(newUser);
    writeUsers(users);
    setCurrentUser(newUser);
    setSignupMessage("Account created and signed in.");
    router.push("/");
  };

  return (
    <div className="bg-gradient-feature flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <Card className="p-6">
          <div className="mb-6 text-center">
            <h1 className="text-foreground mb-2 text-3xl font-bold">
              Selamat Datang
            </h1>
            <p className="text-muted-foreground">
              Masuk atau daftar untuk mulai berbelanja
            </p>
          </div>

          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Masuk</TabsTrigger>
              <TabsTrigger value="signup">Daftar</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form className="space-y-4" onSubmit={handleSignIn}>
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={signinPassword}
                    onChange={(e) => setSigninPassword(e.target.value)}
                    required
                  />
                </div>
                {signinMessage && (
                  <p className="text-sm text-red-600">{signinMessage}</p>
                )}
                <Button type="submit" className="w-full">
                  Masuk
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form className="space-y-4" onSubmit={handleSignUp}>
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Nama Lengkap</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                  <p className="text-muted-foreground text-xs">
                    Minimal 6 karakter
                  </p>
                </div>
                {signupMessage && (
                  <p className="text-sm text-red-600">{signupMessage}</p>
                )}
                <Button type="submit" className="w-full">
                  Daftar
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
