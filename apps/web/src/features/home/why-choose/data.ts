import {
  ShieldCheck,
  Truck,
  CreditCard,
  RotateCcw,
} from "lucide-react";

import type { Feature } from "./types";

export const features: Feature[] = [
  {
    id: 1,
    title: "Premium Quality",
    description:
      "Crafted from high-quality materials with exceptional attention to detail.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Free Shipping",
    description:
      "Enjoy free delivery across India on eligible orders.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "Fast and secure checkout with trusted payment gateways.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Easy Returns",
    description:
      "Simple 7-day return policy for a worry-free shopping experience.",
    icon: RotateCcw,
  },
];