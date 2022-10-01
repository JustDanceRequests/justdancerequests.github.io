import { component$ } from '@builder.io/qwik';

export const FeatureIntegration = component$(() => {
  return (
    <div class='w-full flex flex-col md:flex-row justify-between p-10 py-12 md:py-36 space-y-10 md:space-y-0 bg-gray-purple'>
      <div class='flex-1 flex items-center justify-center'>
        <p class='font-normal text-2xl md:text-4xl text-slate-700 dark:text-white'>
          Direct integration into
          <br />
          <span class='font-bold text-indigo-200'>OBS</span>, <span class='font-bold text-lime-200'>Streamlabs</span>{' '}
          and
          <br />
          other Streaming Software
        </p>
      </div>
      <div class='flex-1 flex flex-row items-center justify-center'>
        <img class='w-8/12 md:w-3/6' src='/images/extension/live-configuration.png' />
      </div>
    </div>
  );
});
