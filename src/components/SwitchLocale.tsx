"use client";
import { LocaleKey } from "@/libs/contentful";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { P } from "./TextComponents";

function useOutsideAlerter(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.MutableRefObject<any>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function SwitchLocale() {
  const [isOpen, setOpen] = React.useState(false);
  const { locale }: { locale: LocaleKey } = useParams();
  const secondLocale: LocaleKey = locale === "es-ES" ? "en-US" : "es-ES";
  const path = usePathname();
  const MAP_LOCALE: Record<LocaleKey, { href: string; label: string }> = {
    "en-US": {
      href: path.replace(locale, "en-US"),
      label: "EN",
    },
    "es-ES": {
      href: path.replace(locale, "es-ES"),
      label: "ES",
    },
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen);

  return (
    <div
      ref={wrapperRef}
      className="relative self-start md:self-end font-extralight"
    >
      {!isOpen && (
        <button onClick={() => setOpen(!isOpen)}>
          <P>{MAP_LOCALE[locale].label}</P>
        </button>
      )}
      {isOpen && (
        <div className="grid col-span-1 relative">
          <Link href={MAP_LOCALE[locale].href}>
            <P>{MAP_LOCALE[locale].label}</P>
          </Link>
          <Link className="absolute top-6" href={MAP_LOCALE[secondLocale].href}>
            <P> {MAP_LOCALE[secondLocale].label}</P>
          </Link>
        </div>
      )}
    </div>
  );
}
