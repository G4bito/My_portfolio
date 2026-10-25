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

Edit `lib/portfolio.ts` to update skills, education, experience, social links, and certifications. Project content lives in `lib/projects.ts`; the homepage, `/projects`, and `/projects/[slug]` case studies share that data.

- Confirmed university: University of Pangasinan (UPANG). Add the program and study dates when provided.
- The frontend list reflects this repository. Backend and database details are intentionally pending.
- SafeLink's overview, stack, and features use owner-supplied information. Its screenshots, public repository, role, problem statement, and development challenges have not been supplied.
- Motra, YA! PAAYOS, LN by PIYA, and Academic Presentation Designs use only their confirmed names and categories. Add further descriptions, technologies, contributions, and links only when verified.
- Project `screenshots` accepts an array of `{ src, alt, caption? }`; place real screenshots in `public/` and use public paths such as `/projects/motra/expenses.webp`. The gallery supports native touch scrolling, Left/Right/Home/End keys, and previous/next controls. Mobile projects render screenshots in phone frames and never display a web demo action.
- The Personal Portfolio gallery uses real browser captures of this site's Home and About pages. The other projects do not yet have supplied screenshots; their previews explicitly state this. No generated app screens or unrelated portraits are presented as screenshots. Each project has a working detail route. Empty case-study sections and unconfigured external actions are omitted.
- Certification entries support title, issuer, completion date, an optional image, and an optional verification URL. The empty state displays until entries are added.
- Add a LinkedIn URL only when confirmed. Place a resume PDF in `public/`, then set `profile.resume` to its public URL (for example `/resume.pdf`). The download button renders only when that file exists.
- The education and experience template examples have been replaced with confirmed background and project work. No employers or qualifications have been inferred.

Navigation links target homepage sections; standalone `/about` and `/projects` pages remain available. Reveal effects, smooth scrolling, the interactive stack, and shader animation respect reduced-motion preferences. The existing contact form and Gmail-only validation are preserved. Provider activation is required before live delivery can be confirmed.

Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` before publishing. No live test messages are sent by the test suite.

## Project device mockups

`LaptopMockup` and `PhoneMockup` are reusable CSS device frames with Next.js images. Screenshots use `object-fit: contain` inside the screen, so portrait and landscape captures retain their original proportions. Physical bezels, speaker, camera, and laptop base sit outside the screenshot area.

Set `mockup: "laptop"` or `mockup: "phone"` in `lib/projects.ts`; omit it for the browser preview. Set `featured: true` to give a project its own showcase row. SafeLink uses a laptop, and Motra uses overlapping phones on desktop and a single phone on mobile. When at least two actual screenshots are configured, the rear phone shows the next screenshot. A single screenshot is never duplicated to imply a second screen. The rear phone is decorative for assistive technology; gallery controls select the primary screenshot.

No SafeLink or Motra captures currently exist, and `public/projects/` has not yet been populated. Their device screens explicitly say **Screenshot needed**, with no invented application UI. Add these real captures, then populate the corresponding `screenshots` array:

- SafeLink: `public/projects/safelink/desktop-01.webp` (a full desktop screenshot); add further captures for the optional gallery.
- Motra: `public/projects/motra/screen-01.webp` and `screen-02.webp` (two actual portrait screenshots for the overlapping presentation); more screenshots are supported.

Use public URLs such as `/projects/motra/screen-01.webp` in the data, with descriptive `alt` text and an optional `caption`. PNG and JPEG are also supported. Device frames don't require external libraries, app installation, videos, or live demos. Missing media has no inactive gallery controls. Existing native swipe scrolling, keyboard navigation, previous/next buttons, and reduced-motion preferences are retained.
