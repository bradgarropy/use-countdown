# ⏳ useCountdown hook

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![codecov][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_[React][react] hook countdown timer. As seen on my [Twitch][twitch] streams._

<p align="center">
    <a href="https://www.npmjs.com/package/@bradgarropy/use-countdown">
        <img alt="next link" src="./images/github.png" width="500">
    </a>
</p>

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/use-countdown
```

## 🥑 Usage

In any React component, import `useCountdown`, then call it like any other [hook][hooks]. The returned `countdown` value will update every second with the remaining time.

```typescript
import useCountdown from "@bradgarropy/use-countdown"

const App = () => {
    const countdown = useCountdown({
        minutes: 1,
        seconds: 30,
        format: "mm:ss",
        autoStart: true,
        onCompleted: () => console.log("onCompleted"),
    })

    console.log(countdown)

    // {minutes: 1, seconds: 30, formatted: "01:30", ...}
    // {minutes: 1, seconds: 29, formatted: "01:29", ...}
    // {minutes: 1, seconds: 28, formatted: "01:28", ...}
    // ...
    // {minutes: 0, seconds: 0, formatted: "00:00", ...}
    // onCompleted()
}
```

## 📖 API Reference

### `useCountdown({minutes, seconds})`

| Name          | Required |   Default   |  Example   | Description                                          |
| :------------ | :------: | :---------: | :--------: | :--------------------------------------------------- |
| `minutes`     | `false`  |     `0`     |    `1`     | Countdown minutes.                                   |
| `seconds`     | `false`  |     `0`     |    `30`    | Countdown seconds.                                   |
| `format`      | `false`  |   `mm:ss`   | `mm:ss:SS` | Format string ([reference][format]).                 |
| `autoStart`   | `false`  |   `false`   |   `true`   | Whether or not to automatically start the countdown. |
| `onCompleted` | `false`  | `undefined` | `function` | Function to call when countdown completes.           |

Starts a countdown timer based on the number of minutes and seconds provided. The returned `countdown` object updates once per second and stops when the timer hits zero.

The `format` parameter is a [`date-fns`][date-fns] format string.

If provided, the `onCompleted` function will be called when the countdown completes.

Here are some examples of how to call `useCountdown`.

```typescript
const countdown = useCountdown({
    minutes: 1,
    seconds: 30,
    format: "mm:ss:SS",
    autoStart: true,
    onCompleted: () => console.log("onCompleted"),
})

const countdown = useCountdown({
    minutes: 5,
    onCompleted: () => console.log("onCompleted"),
})

const countdown = useCountdown({seconds: 10, format: "mm:ss:SS"})
```

The return object is updated every second until the countdown timer ends.

| Name         |    Type    |  Example   | Description                                                               |
| :----------- | :--------: | :--------: | :------------------------------------------------------------------------ |
| `minutes`    |  `number`  |    `1`     | Remaining minutes.                                                        |
| `seconds`    |  `number`  |    `30`    | Remaining seconds.                                                        |
| `formatted`  |  `string`  |  `01:30`   | Formatted remaining time.                                                 |
| `isActive`   | `boolean`  |   `true`   | Indicates that the countdown is active, either running or paused.         |
| `isInactive` | `boolean`  |  `false`   | Indicates that the countdown is inactive, and has finished counting down. |
| `isRunning`  | `boolean`  |   `true`   | Indicates that the countdown is running.                                  |
| `isPaused`   | `boolean`  |  `false`   | Indicates that the countdown is paused.                                   |
| `pause`      | `function` | `function` | Pauses the countdown.                                                     |
| `resume`     | `function` | `function` | Resumes the countdown.                                                    |
| `reset`      | `function` | `function` | Resets the countdown.                                                     |

Here is an example of the returned object.

```typescript
{
    minutes: 1,
    seconds: 30,
    formatted: "01:30",
    isActive: true,
    isInactive: false,
    isRunning: true,
    isPaused: false,
    pause: () => void,
    resume: () => void,
    reset: (time?: Time) => void,
}
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt="Brad Garropy"/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mattscholta.com"><img src="https://avatars.githubusercontent.com/u/545829?v=4?s=100" width="100px;" alt="Matthew Scholta"/><br /><sub><b>Matthew Scholta</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=visormatt" title="Code">💻</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=visormatt" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jamesqquick.com"><img src="https://avatars.githubusercontent.com/u/5391915?v=4?s=100" width="100px;" alt="James Q Quick"/><br /><sub><b>James Q Quick</b></sub></a><br /><a href="#ideas-jamesqquick" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-jamesqquick" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stevencreates.tech"><img src="https://avatars.githubusercontent.com/u/37391025?v=4?s=100" width="100px;" alt="Steven Hofheins"/><br /><sub><b>Steven Hofheins</b></sub></a><br /><a href="#blog-StevenCreates" title="Blogposts">📝</a> <a href="#tutorial-StevenCreates" title="Tutorials">✅</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://fish.solar"><img src="https://avatars.githubusercontent.com/u/66899904?v=4?s=100" width="100px;" alt="Jack Reiker"/><br /><sub><b>Jack Reiker</b></sub></a><br /><a href="#ideas-rpxs" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-rpxs" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mehdmhd"><img src="https://avatars.githubusercontent.com/u/40036740?v=4?s=100" width="100px;" alt="Mehdi Makhloufi"/><br /><sub><b>Mehdi Makhloufi</b></sub></a><br /><a href="#ideas-Mehdmhd" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-Mehdmhd" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SirIsaacNeutron"><img src="https://avatars.githubusercontent.com/u/36581033?v=4?s=100" width="100px;" alt="Daniel Badir"/><br /><sub><b>Daniel Badir</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3ASirIsaacNeutron" title="Bug reports">🐛</a> <a href="#ideas-SirIsaacNeutron" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-SirIsaacNeutron" title="User Testing">📓</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bboydflo"><img src="https://avatars.githubusercontent.com/u/2241459?v=4?s=100" width="100px;" alt="Florin Cosmin"/><br /><sub><b>Florin Cosmin</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=bboydflo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://nickdimatteo.com"><img src="https://avatars.githubusercontent.com/u/737188?v=4?s=100" width="100px;" alt="Nick DiMatteo"/><br /><sub><b>Nick DiMatteo</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3Andimatteo" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jimmylongley.com"><img src="https://avatars.githubusercontent.com/u/1380097?v=4?s=100" width="100px;" alt="Jimmy Longley"/><br /><sub><b>Jimmy Longley</b></sub></a><br /><a href="#ideas-JLongley" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://nunofonseca.net"><img src="https://avatars.githubusercontent.com/u/5241920?v=4?s=100" width="100px;" alt="Nuno Fonseca"/><br /><sub><b>Nuno Fonseca</b></sub></a><br /><a href="#ideas-nfplay" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/narthur"><img src="https://avatars.githubusercontent.com/u/4655422?v=4?s=100" width="100px;" alt="Nathan Arthur"/><br /><sub><b>Nathan Arthur</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3Anarthur" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/msopacua"><img src="https://avatars.githubusercontent.com/u/144725145?v=4?s=100" width="100px;" alt="msopacua"/><br /><sub><b>msopacua</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3Amsopacua" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[issues]: https://github.com/bradgarropy/use-countdown/issues
[ama]: https://bradgarropy.com/ama
[twitter]: https://twitter.com/bradgarropy
[react]: https://reactjs.org
[twitch]: https://twitch.tv/bradgarropy
[npm]: https://www.npmjs.com/package/@bradgarropy/use-countdown
[hooks]: https://reactjs.org/docs/hooks-intro.html
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/use-countdown
[github-actions]: https://github.com/bradgarropy/use-countdown/actions
[codecov]: https://app.codecov.io/gh/bradgarropy/use-countdown
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fuse-countdown
[contributing]: https://github.com/bradgarropy/use-countdown/blob/master/contributing.md
[contributors]: #-Contributors
[discord]: https://bradgarropy.com/discord
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/use-countdown.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/use-countdown?style=flat-square
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/use-countdown?style=flat-square
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/use-countdown/%F0%9F%9A%80%20release?style=flat-square
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/use-countdown?style=flat-square
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/use-countdown?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/use-countdown?style=flat-square
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[date-fns]: https://date-fns.org
[format]: https://date-fns.org/docs/format
