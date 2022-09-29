import { join } from 'path';
import { fileURLToPath } from 'url';
import { qwikCityGenerate } from '@builder.io/qwik-city/static/node';
import render from '@/entry.ssr';

qwikCityGenerate(render, {
  origin: 'https://justdancerequets.github.io',
  outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
});
