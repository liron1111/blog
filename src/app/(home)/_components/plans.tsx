import { CheckIcon } from "lucide-react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { List, ListItem } from "@/components/list";
import Link from "next/link";

export function Plans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-8 md:py-16 font-base">
      <Card className="border border-primary rounded-md p-6">
        <CardHeader>
          <CardTitle>User plan</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Subscribe to all authors
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              View authors posts
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Find authors of your favorite topics
            </ListItem>
          </List>
        </CardContent>
        <CardFooter>
          <SignedOut>
            <SignInButton>
              <Button className="w-full">Sign in to start</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button className="w-full" asChild>
              <Link href="/dashboard">Sign in to start</Link>
            </Button>
          </SignedIn>
        </CardFooter>
      </Card>
      <Card className="border border-primary rounded-md p-6">
        <CardHeader>
          <CardTitle>Author plan</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Easily accessed
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Beautifully designed interface
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Highly informational
            </ListItem>
          </List>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Become an author</Button>
        </CardFooter>
      </Card>
    </div>
  );
}