import { component$ } from '@builder.io/qwik';

export const FeatureUI = component$(() => {
  return (
    <div class='w-full flex flex-col md:flex-row justify-between p-10 py-12 md:py-36 space-y-10 md:space-y-0 bg-gray-purple'>
      <div class='flex-1 flex items-center justify-center'>
        <p class='font-normal text-2xl md:text-4xl text-slate-700 dark:text-white'>
          Beautiful UI to
          <br />
          <span class='font-bold italic text-indigo-400'>search</span>,{' '}
          <span class='font-bold italic text-yellow-200'>favourite</span> and
          <br />
          <span class='font-bold italic text-violet-400'>requests</span> songs
          <br />
          live on <span class='font-bold text-[#8961d3]'>Twitch.tv</span>
        </p>
      </div>
      <div class='flex-1 flex flex-row -translate-x-[12%] md:translate-x-0'>
        <img
          class='w-5/12 md:w-1/3 max-w-[275px] rounded-2xl -rotate-12 translate-x-[45%] translate-y-[4.5%] z-[3]'
          src='/images/extension/song-details.jpeg'
        />
        <img
          class='w-5/12 md:w-1/3 max-w-[275px] rounded-2xl rotate-0 translate-x-0 translate-y-0 z-[2]'
          src='/images/extension/song-queue.jpeg'
        />
        <img
          class='w-5/12 md:w-1/3 max-w-[275px] rounded-2xl rotate-12 -translate-x-[45%] translate-y-[4.5%] z-[1]'
          src='/images/extension/song-list.jpeg'
        />
      </div>
    </div>
  );
});
