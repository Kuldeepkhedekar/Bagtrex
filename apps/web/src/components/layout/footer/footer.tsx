import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import { Container } from "@/components/layout";

import {
  companyLinks,
  shopLinks,
  supportLinks,
} from "./footer-links";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Bagtrex
            </h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Premium bags crafted for work, travel,
              and everyday lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 font-semibold">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link href="#" aria-label="Facebook">
                <FaFacebookF className="h-5 w-5" />
              </Link>

              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </Link>

              <Link href="#" aria-label="YouTube">
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Bagtrex.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/refund-policy">
              Refund
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}