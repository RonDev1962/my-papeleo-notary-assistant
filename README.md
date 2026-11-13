# My Papeleo Notary Assistant

A responsive browser-based command center for Papeleo Notary & Services, including itemized draft quotes, reusable client replies, appointment preparation, and editable business settings.

## Hosting

Public site: https://rondev1962.github.io/my-papeleo-notary-assistant/

GitHub Pages publishes the `main` branch at `/(root)`. No custom domain is configured. The existing business website at http://www.papeleotx.com is a separate site and remains unchanged.

## Privacy

No AI API, analytics, client document uploads, payment forms, or client identity fields are included. Business settings and reusable templates save only in the current browser when Save settings is clicked. Working quote inputs and message drafts clear on reload. Do not enter private client information. There is no cross-device synchronization. Clipboard text is only sent to another service if the user chooses to paste it there.

## Pricing

All estimates require current state-law verification. The supplied RON technology surcharge and separate session fee are flagged for review. Travel beyond 15 miles, up to a 35-mile maximum, requires a manual quote. Estate Planning has no separate fee supplied and requires scope/pricing review. These business rules are not a legal determination.

## Files

`index.html`, `styles.css`, and `app.bundle.js` run the website. `app.js`, `defaults.js`, and `engine.js` are the editable JavaScript source. Graphics were supplied by the business owner. The round logo has its own strip below the portrait, avoiding overlap on desktop, tablet, and mobile layouts.

The original local project includes the bundle-generation scripts and 32 passing calculation/application-logic checks. The live site was reviewed in Chrome at 375 × 812 and 1440 × 812 responsive sizes. The fictional quote returned $118.50, copying succeeded, and the Quote, Replies, and Prep navigation worked. Physical-device and Safari/Firefox testing were not performed.
