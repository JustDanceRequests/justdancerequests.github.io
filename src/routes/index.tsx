import { component$ } from '@builder.io/qwik';
import { Menu } from '@/components/navigation/menu';
import { Timeline } from '@/components/timeline/timeline';
import { Hero } from '@/components/hero';

export default component$(() => {
  return (
    <div className='flex-1 dark:bg-gray-purple overflow-y-scroll'>
      <div className='sticky top-0 z-10'>
        <Menu
          entries={[
            {
              icon: '🚀',
              name: 'The Project',
              href: '#about',
            },
            {
              icon: '🗺️',
              name: 'Roadmap',
              href: '#roadmap',
            },
          ]}
        />
      </div>
      <div class='flex h-2/3 bg-gray-900'>
        <Hero />
      </div>
      <div class='flex flex-row w-full h-full bg-gray-purple justify-end'></div>
      <div class='flex flex-row w-full h-full bg-slate-600'></div>
      <Timeline
        data={[
          {
            icon: '🚀',
            date: '14 Nov',
            name: 'Release 1.0',
            content: 'This is some content heheh',
          },
          {
            icon: '🚀',
            date: '14 Nov',
            name: 'Release 1.0',
            content: 'This is some content heheh',
          },
          {
            icon: '🚀',
            date: '14 Nov',
            name: 'Release 1.0',
            content: 'This is some content heheh',
          },
        ]}
      />
    </div>
  );
});
