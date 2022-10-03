import { component$ } from '@builder.io/qwik';
import { ChatBox } from './chat/box';

export const FeatureChat = component$(() => {
  return (
    <div class='w-full flex flex-col md:flex-row-reverse items-center justify-between p-10 py-12 md:py-36 space-y-10 md:space-y-0 bg-slate-900'>
      <div class='flex-1 flex items-center justify-center'>
        <p class='font-normal text-2xl md:text-4xl text-slate-700 dark:text-white'>
          Allow requesting songs
          <br />
          directly through <span class='font-bold italic text-yellow-200'>chat</span>
        </p>
      </div>
      <div class='flex-1 flex flex-col items-center space-y-2'>
        <ChatBox>
          <p q:slot='username' class='font-bold text-cyan-400'>
            Tandashi
          </p>
          <p q:slot='message' class=''>
            !sr 365 by Zedd & Katy Perry
          </p>
        </ChatBox>

        <ChatBox>
          <p q:slot='username' class='font-bold text-violet-400'>
            JustDanceRequests
          </p>
          <p q:slot='message' class=''>
            Song was successfully added to the Queue
          </p>
        </ChatBox>
      </div>
    </div>
  );
});
