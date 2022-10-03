import { component$, Slot } from '@builder.io/qwik';

export const ChatBox = component$(() => {
  return (
    <div class='rounded-lg dark:bg-slate-800 max-w-fit'>
      <div class='md:inline-flex flex-row md:space-x-2 font-normal text-white p-3'>
        <Slot name='username' />
        <Slot name='message' />
      </div>
    </div>
  );
});
