import { component$ } from '@builder.io/qwik';

export interface MenuEntryProps {
  name: string;
  href: string;
}

export const MenuEntry = component$((props: MenuEntryProps) => {
  return (
    <li>
      <a
        href={props.href}
        class='block py-2 pr-4 pl-3 hover:text-gray-500 text-gray-800 md:p-0 dark:text-gray-100 dark:hover:text-gray-300 text-lg font-medium'
      >
        {props.name}
      </a>
    </li>
  );
});
