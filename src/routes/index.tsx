import { component$ } from '@builder.io/qwik';
import { Menu } from '@/components/navigation/menu';
import { Timeline } from '@/components/timeline/timeline';
import { Hero } from '@/components/hero';
import { FeatureUI, FeatureChat, FeatureIntegration } from '@/components/content/content';

export default component$(() => {
  return (
    <div className='flex-1 dark:bg-gray-purple overflow-y-scroll overflow-x-hidden'>
      <div className='sticky top-0 z-10'>
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
      </section>
    </div>
  );
});
