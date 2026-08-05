import Link from "next/link";
import { ArrowRightIcon } from "./components/ui/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-gradient">404</p>
        <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="muted mx-auto mt-4 max-w-md">
          The link may be out of date. The work, the CV and the contact details
          are all still where they should be.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary group">
            <span className="relative flex items-center gap-2">
              Back home
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href="/projects" className="btn-ghost">
            Browse projects
          </Link>
        </div>
      </div>
    </div>
  );
}
