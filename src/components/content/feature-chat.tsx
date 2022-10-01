import { component$ } from '@builder.io/qwik';

export const FeatureChat = component$(() => {
  return (
    <div class='w-full flex flex-col-reverse md:flex-row justify-between p-10 py-12 md:py-36 space-y-10 md:space-y-0 bg-slate-900'>
      <div class='flex-1 flex flex-row -translate-x-[12%] md:translate-x-0'>
        <img
          class='w-5/12 md:w-1/3 rounded-2xl -rotate-12 translate-x-[45%] translate-y-[4.5%] z-[3]'
          src='/images/extension/song-details.jpeg'
        />
        <img
          class='w-5/12 md:w-1/3 rounded-2xl rotate-0 translate-x-0 translate-y-0 z-[2]'
          src='/images/extension/song-queue.jpeg'
        />
        <img
          class='w-5/12 md:w-1/3  rounded-2xl rotate-12 -translate-x-[45%] translate-y-[4.5%] z-[1]'
          src='/images/extension/song-list.jpeg'
        />
      </div>
      <div class='flex-1 flex items-center justify-center'>
        <p class='font-normal text-2xl md:text-4xl text-slate-700 dark:text-white'>
          Allow requesting songs directly
          <br />
          through chat
        </p>
      </div>
    </div>
  );
});
