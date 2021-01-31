# ⏳ useCountdown hook

<a href="https://www.npmjs.com/package/@bradgarropy/use-countdown">
    <img alt="npm" src="https://img.shields.io/npm/v/@bradgarropy/use-countdown.svg?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/@bradgarropy/use-countdown">
    <img alt="npm" src="https://img.shields.io/npm/dt/@bradgarropy/use-countdown?style=flat-square">
</a>

<a href="https://bundlephobia.com/result?p=@bradgarropy/use-countdown">
    <img alt="npm" src="https://img.shields.io/bundlephobia/minzip/@bradgarropy/use-countdown?style=flat-square">
</a>

<a href="https://github.com/bradgarropy/use-countdown/actions">
    <img alt="npm" src="https://img.shields.io/github/workflow/status/bradgarropy/use-countdown/%F0%9F%9A%80%20release?style=flat-square">
</a>

<a href="https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fuse-countdown">
    <img alt="npm" src="https://img.shields.io/npm/types/@bradgarropy/use-countdown?style=flat-square">
</a>

<a href="https://bradgarropy.com/discord">
    <img alt="npm" src="https://img.shields.io/discord/748196643140010015?style=flat-square">
</a>

_[React][react] hook countdown timer. As seen on my [Twitch][twitch] streams._

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/use-countdown
```

## 🥑 Usage

In any React component, import `useCountdown`, then call it like any other [hook][hooks]. The returned `countdown` value will update every second with the remaining time.

```javascript
import useCountdown from "@bradgarropy/use-countdown"

const App = () => {
    const countdown = useCountdown({minutes: 1, seconds: 30})
    console.log(countdown)

    // {minutes: 1, seconds: 30}
    // {minutes: 1, seconds: 29}
    // {minutes: 1, seconds: 28}
}
```

## 📖 API Reference

### `useCountdown({minutes, seconds})`

| Name      | Required | Default | Example | Description        |
| :-------- | :------: | :-----: | :-----: | :----------------- |
| `minutes` | `false`  |   `0`   |   `1`   | Countdown minutes. |
| `seconds` | `false`  |   `0`   |  `30`   | Countdown seconds. |

Starts a countdown timer based on the number of minutes and seconds provided. The returned `countdown` object updates once per second and stops when the timer hits zero.

```javascript
const countdown = useCountdown({minutes: 1, seconds: 30})
const countdown = useCountdown({minutes: 5})
const countdown = useCountdown({seconds: 10})
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[issues]: https://github.com/bradgarropy/use-countdown/issues
[ama]: https://bradgarropy.com/ama
[twitter]: https://twitter.com/bradgarropy
[react]: https://reactjs.org
[twitch]: https://twitch.tv/bradgarropy
[npm]: https://www.npmjs.com/package/@bradgarropy/use-countdown
[hooks]: https://reactjs.org/docs/hooks-intro.html
