import { component$ } from '@builder.io/qwik';
import { Menu } from '@/components/navigation/menu';

export default component$(() => {
  return (
    <div className='flex flex-col flex-1 dark:bg-gray-purple'>
      <div className='sticky top-0'>
        <Menu
          entries={[
            {
              name: '🚀 The Project',
              href: '#about',
            },
            {
              name: '🗺️ Roadmap',
              href: '#roadmap',
            },
          ]}
        />
      </div>
    </div>
  );
});
