# 👨🏼‍💻 contributing

I would love your help to improve this project! Here are a few ways to contribute, and some guidelines to help you along the way.

## 🐛 issues

If you come across any bugs or something that doesn't seem right, please [open an issue][issues]. Also, if you have an idea for the project, open an issue to start the discussion.

When possible, please include a link to a `git` repository or a [CodeSandbox][codesandbox] which illustrates the problem you're facing. This is especially important when you find a bug.

## 🔃 pull requests

Yes, I accept pull requests! You can submit a pull request to fix a bug, implement a feature, add tests, or improve the documentation.

If you've never created a pull request before, you can [learn how][kcd-pr] for free!

### 🎛 setup

In order to submit a pull request, you'll have to setup your own development environment. Start by [forking][fork] the repository.

Then you can clone the forked repository to your system.

```bash
git clone https://github.com/<username>/use-countdown
```

Next you need to install the dependencies.

```bash
cd use-countdown
npm install
```

Finally, you can build and test the project.

```bash
npm run test
npm run build
```

Now you're ready to start writing code!

### 💎 format

When writing your code, please try to follow the existing code style.

Your code will be automatically linted and formatted before each commit. However, if you want to manually lint and format, use the provided `npm` scripts.

```bash
npm run lint:fix
npm run format:fix
```

### 🧪 tests

The project maintains `100%` test coverage. If you change code, please maintain complete test coverage. You can run the tests to confirm.

```bash
npm run test
```

### 📖 documentation

If you make any changes that require documentation updates, please include them in the same pull request.

### 🔹 commits

This project do not enforce a specific commit style. However, if you submit a pull request that closes an issue, please reference it in the commit message.

```bash
git commit -m "Fix a bug. Closes #1."
```

### 💬 feedback

Once your pull request is submitted, I may provide you with some feedback. While working on the feedback, please move the pull request to `Draft` state. Once you've finished addressing the feedback, mark the pull request as `Ready for review` and mention me in a comment.

```
Alright @bradgarropy, how's this?
```

### ⚖ license

Any code you contribute is subject to the [MIT license][license].

## ✨ contributors

I appreciate any and all types of contributions to this project! Contributors are recognized here and in the [`readme`][contributors].

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt="Brad Garropy"/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center"><a href="https://www.mattscholta.com"><img src="https://avatars.githubusercontent.com/u/545829?v=4?s=100" width="100px;" alt="Matthew Scholta"/><br /><sub><b>Matthew Scholta</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=visormatt" title="Code">💻</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=visormatt" title="Documentation">📖</a></td>
      <td align="center"><a href="http://jamesqquick.com"><img src="https://avatars.githubusercontent.com/u/5391915?v=4?s=100" width="100px;" alt="James Q Quick"/><br /><sub><b>James Q Quick</b></sub></a><br /><a href="#ideas-jamesqquick" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-jamesqquick" title="User Testing">📓</a></td>
      <td align="center"><a href="http://stevencreates.tech"><img src="https://avatars.githubusercontent.com/u/37391025?v=4?s=100" width="100px;" alt="Steven Hofheins"/><br /><sub><b>Steven Hofheins</b></sub></a><br /><a href="#blog-StevenCreates" title="Blogposts">📝</a> <a href="#tutorial-StevenCreates" title="Tutorials">✅</a></td>
      <td align="center"><a href="http://fish.solar"><img src="https://avatars.githubusercontent.com/u/66899904?v=4?s=100" width="100px;" alt="Jack Reiker"/><br /><sub><b>Jack Reiker</b></sub></a><br /><a href="#ideas-rpxs" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-rpxs" title="User Testing">📓</a></td>
      <td align="center"><a href="https://github.com/Mehdmhd"><img src="https://avatars.githubusercontent.com/u/40036740?v=4?s=100" width="100px;" alt="Mehdi Makhloufi"/><br /><sub><b>Mehdi Makhloufi</b></sub></a><br /><a href="#ideas-Mehdmhd" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-Mehdmhd" title="User Testing">📓</a></td>
      <td align="center"><a href="https://github.com/SirIsaacNeutron"><img src="https://avatars.githubusercontent.com/u/36581033?v=4?s=100" width="100px;" alt="Daniel Badir"/><br /><sub><b>Daniel Badir</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3ASirIsaacNeutron" title="Bug reports">🐛</a> <a href="#ideas-SirIsaacNeutron" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-SirIsaacNeutron" title="User Testing">📓</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/bboydflo"><img src="https://avatars.githubusercontent.com/u/2241459?v=4?s=100" width="100px;" alt="Florin Cosmin"/><br /><sub><b>Florin Cosmin</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=bboydflo" title="Code">💻</a></td>
      <td align="center"><a href="http://nickdimatteo.com"><img src="https://avatars.githubusercontent.com/u/737188?v=4?s=100" width="100px;" alt="Nick DiMatteo"/><br /><sub><b>Nick DiMatteo</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/issues?q=author%3Andimatteo" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[issues]: https://github.com/bradgarropy/use-countdown/issues
[codesandbox]: https://codesandbox.io
[kcd-pr]: https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github
[license]: https://github.com/bradgarropy/use-countdown/blob/master/license
[fork]: https://github.com/bradgarropy/use-countdown/fork
[contributors]: https://github.com/bradgarropy/use-countdown#-contributors
