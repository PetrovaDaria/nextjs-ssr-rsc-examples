# SSR и RSC на базе next.js

### Примеры в этом репозитории рассматривают следующие кейсы:
- передача сериализуемых и несериализуемых пропсов из северного компонента в клиентский 
- использование `Server function`
- обращение к `window` на сервере и вызываемая этим ошибка на сервере
- корректную версию обращение к `window`
- несоответствие серверного и клиентского html на примере `Date.now()`
- `next/dynamic` с опцией `ssr: false`
- стриминг через `Suspense`

В проект встроена библиотека `RSC parser` для исследования `RSC payload`, который генерируется в каждом из примеров.

## Запуск

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
``
