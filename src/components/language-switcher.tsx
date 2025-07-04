"use client";

import { useState, useEffect } from "react";
import { Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/language-context";
import type { Language } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-1 px-2">
        <Globe className="h-4 w-4" />
        <span className="sr-only">Loading language switcher</span>
      </Button>
    );
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:ml-1">
            {t("nav.language")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as Language);
              setOpen(false);
            }}
            className="flex items-center justify-between"
          >
            {lang.name}
            {language === lang.code && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
