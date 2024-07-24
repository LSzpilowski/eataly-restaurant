import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MyAccountPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your email and password to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  id="email"
                  placeholder="julius.cesar@gmail.com"
                  className="border rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  required
                  id="password"
                  placeholder="Type in your password"
                  className="border rounded-xl"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full border rounded-xl">
                Login
              </Button>
              <Button type="submit" className="w-full border rounded-xl">
                Login with Google
              </Button>
            </CardFooter>
            <CardFooter className="flex flex-row justify-center text-sm">
              <p>Don{"'"}t have an account?</p>
              <TabsList className="border-none bg-normal text-normal underline p-0 m-0">
                <TabsTrigger className="underline" value="signUp">
                  Sign Up
                </TabsTrigger>
              </TabsList>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Enter your email and password to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  type="name"
                  placeholder="Julius Cesar"
                  required
                  className="border rounded-xl"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border rounded-xl"
                />
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Type in your password"
                    required
                    className="border rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full border rounded-xl">
                Create Account
              </Button>
            </CardFooter>
            <CardFooter className="flex flex-row justify-center gap-2 text-sm">
              <p> Already have account?</p>
              <TabsList className="border-none bg-normal text-normal underline p-0 m-0">
                <TabsTrigger value="signIn">Sign In</TabsTrigger>
              </TabsList>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyAccountPage;
