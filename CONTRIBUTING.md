# Contributing to CMA Compass

Thank you for wanting to help! This is a free, open-source app made for CMA students.

## Reporting Issues

### Found a broken video link?
Open an issue with title `Broken video: [Chapter Name]` and include the chapter name and what error you see. Label it `broken-link`.

### Found a bug?
Describe what happened, what you expected, and include your device / app version. Label it `bug`.

### Feature request?
Open an issue with label `enhancement`. We discuss before coding.

## Contributing Code

### Setup
```bash
git clone https://github.com/jiteshoffice1234-star/cma-compass.git
cd cma-compass
npm install
npm run dev     # Web preview
npx cap sync android  # Android native
```

### Code style
- TypeScript strict mode is enabled
- Run `npm run build` before submitting a PR
- Follow existing code style (no Prettier config — keep it readable and consistent)

### Adding quiz questions
Edit `src/data/questions.ts`:
```typescript
{
  id: "ch_1_q_21",
  chapterId: 1,
  question: "What is...",
  options: ["A", "B", "C", "D"],
  correct: 0,
  explanation: "The answer is A because..."
}
```

### Adding chapters
1. Edit `src/data/curriculum.ts` (or the relevant chapter file)
2. Add the chapter entry with paperId, level, title, duration, keyPoints
3. Add corresponding questions to `src/data/questions.ts`
4. Test unlock logic

### Before submitting a PR
- [ ] `npm run build` passes
- [ ] No TypeScript errors
- [ ] Tested on Android emulator or device
- [ ] Described changes in PR body

## PR process
1. Fork the repo
2. Create a branch: `git checkout -b fix/broken-video-ch2`
3. Commit: `git commit -m "Fix: Chapter 2 video link updated"`
4. Push: `git push origin fix/broken-video-ch2`
5. Open a PR with a clear description of changes
6. Maintainers review and merge (or request changes)

## Questions?
Comment on issues. No Discord/Slack yet — issues are monitored regularly.

## License
By contributing, you agree your code is under the MIT License.
