import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <div class='flex flex-col md:flex-row w-full space-y-4 md:space-y-0'>
      <div class='flex-1 flex flex-col items-center justify-center md:ml-44'>
        <div class='flex-1 flex flex-col items-start justify-center space-y-16'>
          <div class='font-bold text-7xl'>
            <p class='text-fuchsia-400'>Interact.</p>
            <p class='text-violet-400'>Request.</p>
            <p class='text-sky-400'>Dance.</p>
          </div>
        </div>
      </div>
      <div class='flex flex-col flex-1 items-center md:items-start justify-center space-y-8 md:space-y-16'>
        <div class='font-light text-3xl'>
          <p class='text-white'>
            Making requesting songs <br />
            more enjoyable 🎉
          </p>
        </div>
        <div class='flex flex-row space-x-2'>
          <a
            target='_blank'
            href='https://dashboard.twitch.tv/extensions/nv9ue0u2753fk3n1n9ghrvd28e3r9v'
            class='px-10 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white'
          >
            Install on Twitch
          </a>
          <a
            target='_blank'
            href='https://github.com/Tandashi/JDR-Twitch/wiki/Configuration-Guide'
            class='px-10 py-2 rounded-lg outline outline-1 outline-violet-600 hover:bg-violet-600 text-white'
          >
            Docs
          </a>
        </div>
      </div>
    </div>
  );
});
