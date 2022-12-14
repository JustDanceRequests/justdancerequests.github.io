import { component$ } from '@builder.io/qwik';
import { TimelineBlock, TimelineBlockProps } from './timeline-block';

export interface TimelineProps {
  data: Omit<TimelineBlockProps, 'mirrored'>[];
}

export const Timeline = component$((props: TimelineProps) => {
  return (
    <section class='overflow-hidden'>
      <div class="relative md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-[calc(50%-theme('spacing.2')/2)] md:before:h-[calc(100%-80px)] md:before:translate-y-12 md:before:w-2 before:bg-slate-300 dark:before:bg-slate-800">
        {props.data.map((entry, i) => (
          <TimelineBlock
            mirrored={i % 2 === 1}
            icon={entry.icon}
            date={entry.date}
            name={entry.name}
            content={entry.content}
          />
        ))}
      </div>
    </section>
  );
});
