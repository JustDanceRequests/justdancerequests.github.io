import { component$ } from '@builder.io/qwik';
import { DarkLightModeSwitch } from '@/components/navigation/dark-light-mode-switch';
import { MenuEntry, MenuEntryProps } from '@/components/navigation/menu-entry';
import { DiscordSocial, GitHubSocial, TwitterSocial } from '@/components/socials/socials';

export interface MenuProps {
  entries: MenuEntryProps[];
}

export const Menu = component$((props: MenuProps) => {
  return (
    <nav class='bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div class='container flex flex-wrap justify-between items-center mx-auto'>
        <div class='md:flex-1 hidden w-full md:flex md:w-auto justify-center'>
          <ul class='flex flex-col items-center md:flex-row md:space-x-8 md:text-sm md:font-medium dark:bg-gray-800 md:dark:bg-gray-900'>
            {props.entries.map((entry) => (
              <MenuEntry icon={entry.icon} name={entry.name} href={entry.href} />
            ))}
          </ul>
        </div>

        <a href='/' class='lg:flex-1 flex items-center md:justify-center'>
          <img src='/images/logo.png' class='h-9 sm:h-12' alt='JDR Logo' />
        </a>

        <div class='flex-1 flex flex-row items-center mr-6 md:mr-0 justify-end md:justify-center sm:space-x-12'>
          <div class='hidden md:block'>
            <DarkLightModeSwitch />
          </div>
          <div class='flex flex-row justify-center'>
            <GitHubSocial />
            <DiscordSocial />
            <TwitterSocial />
          </div>
        </div>
      </div>
    </nav>
  );
});
