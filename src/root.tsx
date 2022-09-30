import { component$, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { ThemeContext } from '@/context/theme';

import styles from '@sass/root.sass';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(styles);

  const themeStore = useStore({ mode: 'dark' });
  useContextProvider(ThemeContext, themeStore);

  return (
    <QwikCity>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0'></meta>
      </head>
      <body lang='en' class={['flex flex-col w-screen h-screen', themeStore.mode === 'dark' ? 'dark' : '']}>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
