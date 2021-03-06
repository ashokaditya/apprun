import app from './app';

const ROUTER_EVENT = '//';

export default function route(url: string) {
  if (!url || url === '/') url = '#';
  if (url.startsWith('#')) {
    const [name, ...rest] = url.split('/');
    app.run(name, ...rest);
    app.run(ROUTER_EVENT, name, ...rest);
  } else if (url.startsWith('/')) {
    const [_, name, ...rest] = url.split('/');
    app.run('/' + name, ...rest);
    app.run(ROUTER_EVENT, '/' + name, ...rest);
  } else {
    app.run(url);
    app.run(ROUTER_EVENT, url);
  }
}
