import { component$ } from '@builder.io/qwik';

export interface TimelineBlockProps {
  mirrored: boolean;

  icon: string;
  name: string;
  content: string;
  date: string;
}

export const TimelineBlock = component$((props: TimelineBlockProps) => {
  return (
    <div class={['flex my-8 text-gray-800 dark:text-white', props.mirrored ? 'flex-row-reverse' : '']}>
      <div class={['flex-1 flex', props.mirrored ? '' : 'justify-end']}>
        <div class='relative rounded bg-gray-200 dark:bg-gray-800 min-w-xs max-w-sm p-3 space-y-2'>
          <span class='text-xl font-normal'>{props.name}</span>
          <p class='text-base'>{props.content}</p>
        </div>
      </div>
      <div class='hidden md:flex justify-center items-center z-10 mx-6'>
        <span class='flex w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 items-center justify-center'>
          {props.icon}
        </span>
      </div>
      <div class={['flex-1 flex items-center px-4 md:px-0', props.mirrored ? 'justify-end' : '']}>
        <span class='text-lg font-normal'>{props.date}</span>
      </div>
    </div>
  );
});
