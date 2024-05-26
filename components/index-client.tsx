"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Remove the `code` query parameter from the URL after it has been used.
 */
export const IndexClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (current.get("code")) {
      current.delete("code");
      const search = current.toString();
      const query = search ? `?${search}` : "";

      router.replace(`${pathname}${query}`);
    }
  }, [searchParams, pathname, router]);

  return null;
};
