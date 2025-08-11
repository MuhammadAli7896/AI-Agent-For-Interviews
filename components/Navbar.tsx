"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.action";
import Link from "next/link";

interface NavbarProps {
  user: {
    name: string;
    email: string;
    profileURL?: string | null;
  } | null;
}

const Navbar = ({ user }: NavbarProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-background border-b">
      <Link href='/' className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <span className="text-xl font-semibold text-primary-100">PrepWise</span>
      </Link>

      {user && (
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-primary-100 hover:text-primary-100/90 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
          
          {user.profileURL ? (
            <Image
              src={user.profileURL}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary-100/10 flex items-center justify-center">
              <span className="text-primary-100 text-sm font-semibold cursor-default selection:bg-transparent">
                {user.name
                  .split(' ')
                  .map(part => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()}
              </span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
