# Zyrel Gabriel Maningding

My personal portfolio for UI/UX design and full-stack development.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

Built with Next.js, React, TypeScript, and Tailwind CSS.

Configure the production URL in `lib/metadata.ts` before deploying.

## Source license

This template is free to use in personal and commercial projects. You may not resell or redistribute the template itself.

## Credits and acknowledgments

- Original portfolio template: [David Haz (DavidHDev)](https://github.com/DavidHDev), from [rbp-portfolio](https://github.com/DavidHDev/rbp-portfolio). The original history also records this contributor as David.
- [Joseph Abdullaahi](https://github.com/Joseph-Abdullaah) contributed responsive wrapping for the polaroid cards in the original template.
- Portfolio personalization and subsequent development: [Zyrel Gabriel Maningding (G4bito)](https://github.com/G4bito).

This repository starts with a fresh Git history. These acknowledgments preserve the contributors recorded in the original project's history; the template usage terms above remain in effect.

## Contact form

The contact form submits name, email, and message to FormSubmit for delivery to zyrelgabrielmaningding@gmail.com. After the first submission, confirm the activation email from FormSubmit (check spam too). No API key is needed. The form uses AJAX with CAPTCHA disabled, keeping visitors on the portfolio and showing an inline success or error message. A hidden honeypot remains enabled for spam filtering. Replying to a message uses the visitor's email address.

Documentation: https://formsubmit.co/documentation

Contact delivery tests (Node.js 22.18+): `node --test tests/contact-delivery.test.mjs`

The visitor email field accepts Gmail addresses only. Invalid formats and other domains are blocked before delivery. This checks the address format, not whether the Gmail account exists.

## Portfolio content

Edit `lib/portfolio.ts` to update projects, skills, education, experience, social links, and certifications. The homepage and the existing About and Projects routes share these components and content.

- Confirmed university: University of Pangasinan (UPANG). Add the program and study dates when provided.
- The frontend list reflects this repository. Backend and database details are intentionally pending.
- SafeLink is a clearly identified capstone placeholder. Add its description, actual stack, features, contribution, repository, and optional demo when verified.
- Project `image` accepts `{ src, alt }`; place screenshots in `public/`. The portfolio currently uses the owner's portrait as its thumbnail.
- Certification entries support title, issuer, completion date, an optional image, and an optional verification URL. The empty state displays until entries are added.
- Add a LinkedIn URL only when confirmed. Place a resume PDF in `public/`, then set `profile.resume` to its public URL (for example `/resume.pdf`). The download button renders only when that file exists.
- The education and experience template examples have been replaced with confirmed background and project work. No employers or qualifications have been inferred.

Navigation links target homepage sections; standalone `/about` and `/projects` pages remain available. Reveal effects, smooth scrolling, the interactive stack, and shader animation respect reduced-motion preferences. The existing contact form and Gmail-only validation are preserved. Provider activation is required before live delivery can be confirmed.

Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` before publishing. No live test messages are sent by the test suite.
