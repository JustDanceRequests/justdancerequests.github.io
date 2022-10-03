import { component$ } from '@builder.io/qwik';
import { Menu } from '@/components/navigation/menu';
import { Timeline } from '@/components/timeline/timeline';
import { Hero } from '@/components/hero';
import { FeatureUI, FeatureChat, FeatureIntegration } from '@/components/content/content';

export default component$(() => {
  return (
    <div class='flex-1 w-full dark:bg-gray-purple overflow-y-scroll overflow-x-hidden pb-20'>
      <div class=''>
        <Menu
          entries={[
            {
              icon: '🚀',
              name: 'Features',
              href: '#features',
            },
            {
              icon: '🗺️',
              name: 'Roadmap',
              href: '#roadmap',
            },
          ]}
        />
      </div>
      <section class='flex h-2/3 bg-slate-900'>
        <Hero />
      </section>
      <section id='features'>
        <FeatureUI />
        <FeatureChat />
        <FeatureIntegration />
      </section>
      <section id='roadmap'>
        <p class='w-full bg-slate-800 p-12 text-white text-4xl font-normal text-center'>🗺️ Roadmap</p>

        <Timeline
          data={[
            {
              icon: '🚀',
              date: '7 Nov',
              name: 'Testing 3.0',
              content: 'Testing of the new backend / server structure',
            },
            {
              icon: '🚀',
              date: '14 Nov',
              name: 'Release 3.0',
              content: 'Release of the new backend / server structure',
            },
            {
              icon: '🚀',
              date: '14 Nov',
              name: 'Song Update',
              content: 'Finalization of the Just Dance 2023 Songs',
            },
            {
              icon: '🚀',
              date: 'December',
              name: 'Release 3.1',
              content: 'Song History and Cooldowns',
            },
            {
              icon: '🚀',
              date: 'TBD',
              name: 'Release 3.2',
              content: 'Requests via Channel Points / Bits',
            },
            {
              icon: '🚀',
              date: 'TBD',
              name: 'Release 3.3',
              content: 'Complete overhall of the UI',
            },
          ]}
        />
        <p class='w-full dark:text-white text-base font-normal text-center'>
          Please keep in mind that I am just a single person working on this project in my free time.
          <br />
          Dates may be subject to change.
        </p>
      </section>
    </div>
  );
});
