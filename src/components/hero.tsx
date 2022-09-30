import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <div class='flex flex-row w-full'>
      <div class='flex-1 flex flex-col items-center justify-center md:ml-64'>
        <div class='flex-1 flex flex-col items-start justify-center space-y-16'>
          <div class='font-bold text-7xl'>
            <p class='text-fuchsia-400'>Interact.</p>
            <p class='text-violet-400'>Request.</p>
            <p class='text-sky-400'>Dance.</p>
          </div>
          <div class='font-light text-3xl'>
            <p class='text-white'>
              Making requesting songs <br />
              more enjoyable 🎉
            </p>
          </div>
        </div>
      </div>
      <div class='hidden md:flex flex-1 items-center justify-start'></div>
    </div>
  );
});
