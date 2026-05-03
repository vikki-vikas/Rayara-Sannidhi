'use client';

import { useRouter, usePathname } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

type LocaleOption = { code: 'en' | 'kn'; label: string };

const options: LocaleOption[] = [
  { code: 'en', label: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
];

export function LanguageSwitcher({
  currentLocale,
  triggerLabel,
}: {
  currentLocale: 'en' | 'kn';
  triggerLabel: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: 'en' | 'kn') => {
    if (next === currentLocale) return;
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'kn') {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join('/') || `/${next}`);
  };

  const current = options.find((o) => o.code === currentLocale) ?? options[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label={triggerLabel}
          className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          <span>{current.label}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="z-50 min-w-[10rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-950"
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.code}
              onSelect={() => switchTo(option.code)}
              className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-zinc-100 dark:data-[highlighted]:bg-zinc-900"
            >
              <span className="flex h-4 w-4 items-center justify-center">
                {option.code === currentLocale ? <CheckIcon className="h-4 w-4" /> : null}
              </span>
              <span>{option.label}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
