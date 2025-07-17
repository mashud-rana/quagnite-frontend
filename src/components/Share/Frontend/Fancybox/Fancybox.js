"use client";
import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Fancybox({ children, delegate = "[data-fancybox]" }) {
  useEffect(() => {
    NativeFancybox.bind(delegate, {
      animated: true,
      dragToClose: false,
    });

    return () => {
      NativeFancybox.unbind(delegate);
    };
  }, [delegate]);

  return children;
}
