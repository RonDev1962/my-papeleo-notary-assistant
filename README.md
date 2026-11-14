# My Papeleo Notary Assistant

A responsive browser-based command center for Papeleo Notary & Services, including itemized draft quotes, reusable client replies, appointment preparation, and editable business settings.

## Hosting

Public site: https://rondev1962.github.io/my-papeleo-notary-assistant/

GitHub Pages publishes the `main` branch at `/(root)`. No custom domain is configured. The existing business website at http://www.papeleotx.com is a separate site and remains unchanged.

## Privacy

No AI API, analytics, client document uploads, payment forms, or client identity fields are included. Business settings and reusable templates save only in the current browser when Save settings is clicked. Working quote inputs and message drafts clear on reload. Do not enter private client information. There is no cross-device synchronization. Clipboard text is only sent to another service if the user chooses to paste it there.

## Pricing

All estimates require current state-law verification. The RON technology surcharge has been removed; the separate RON session fee still requires review. The $30 base round-trip travel fee remains. Beyond 15 miles, up to a 35-mile maximum, enter an agreed additional-mileage dollar amount. Blank means unresolved, while an explicit zero waives the additional charge. The optional calculator uses $0.76 per manually entered billable extra mile and rounds to cents. Its result is editable. One-way versus round-trip extra miles are never inferred. Changing the distance clears the previous mileage amount. The rate can be edited in Business Settings and does not update automatically.

The default rate matches the [IRS business mileage benchmark for July–December 2026](https://www.irs.gov/tax-professionals/standard-mileage-rates). This is a tax benchmark, not a mandated client fee. Estate Planning has no separate fee supplied and requires scope/pricing review. These business rules are not a legal determination.

## Files

`index.html`, `styles.css`, and `app.bundle.js` run the website. `app.js`, `defaults.js`, and `engine.js` are the editable JavaScript source. Graphics were supplied by the business owner. The round logo has its own strip below the portrait, avoiding overlap on desktop, tablet, and mobile layouts.

The original local project includes the bundle-generation scripts and 55 passing calculation/application-logic checks. The live site was reviewed in Chrome at 375 × 812 and 1440 × 812 responsive sizes. The fictional quote returned $118.50, copying succeeded, and the Quote, Replies, and Prep navigation worked. Physical-device and Safari/Firefox testing were not performed.

## Contact options

Email: quotes@papeleotx.com. Mobile call or text: 682-334-3664. The site offers email, call, and SMS links; these open the visitor’s chosen app and do not send a message automatically. Contact details are editable in Business Settings. Existing saved settings retain prior customizations and receive the mileage and phone defaults.
