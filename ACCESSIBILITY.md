# Accessibility in CMA Compass

We are committed to making CMA Compass usable by all students.

## Current features

- **Keyboard navigation** — all interactive elements are keyboard accessible
- **Screen reader support** — buttons have descriptive labels; icons use accessible names (lucide-react provides these)
- **Color contrast** — text meets WCAG AA standards (4.5:1 ratio); neobrutalism design uses high contrast
- **Text sizing** — respects system font size preferences; no fixed sizes that break on zoom

## Known limitations

- **Flashcard flip animation** — may confuse screen readers; need `aria-live` region to announce answer
- **PDF viewer** — uses Mozilla PDF.js with limited accessibility; workaround: download PDF and open in native reader
- **YouTube videos** — depends on YouTube's player accessibility

## Testing

We test with:
- NVDA (Windows) screen reader
- Android TalkBack

## Requesting accessibility features

Found something that does not work for you? Open an issue with label `accessibility` and describe:
- What assistive technology you use
- What you expected to happen
- What actually happened

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Capacitor Accessibility](https://capacitorjs.com/docs/apis/accessibility)
