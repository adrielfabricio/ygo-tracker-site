---
title: 'Privacy Policy — YGO Tracker'
description: 'How YGO Tracker handles your data: what the app collects, what it does not, where it is stored and how to delete it.'
---

# Privacy Policy — YGO Tracker

**Last updated**: 2026-11-23

## Who we are

YGO Tracker is a mobile app for tracking a physical Yu-Gi-Oh! card collection. It is developed
and operated by Adriel Fabrício.

## What we collect

**Account information.** When you create an account we store the email address associated with
it. If you sign in with Google or Apple, we receive the identifier and email that provider
shares with us. We never receive or store your password for those providers.

**Your collection data.** Decks, deck cards, set collections, ownership state, and wishlist
entries that you create in the app. Card details such as name and artwork reference are stored
alongside your entries so the app works offline.

**Public profile, duels and scoreboard.** Each account has a username and a duelist name. Your profile is private by default: only you see it. If you make it public, other signed-in users can see your username, your duelist name, the badges you earned (which ones and when), your scoreboard (how many duels you played, won and lost) and any deck or collection you chose to make public. When you pair with another player at the same table, the app stores one duel record shared by the two of you: both usernames and duelist names as they were then, the outcome, both final Life Point totals and the date. Only the two players can read it. A duel counts on the scoreboard only after the other player confirms it, and it then adds to both players' scoreboards. A scoreboard never goes down. The names in a duel record stay as they were when the duel was recorded, even if either player later changes them or makes their profile private.

**Username.** You choose your username when you sign up, or right after your first Google or Apple sign-in. An account that never chose one gets one built from the part of its email address before the @ (or a random one for an Apple private relay address); you see it on your profile, others see it only if you make your profile public, and your first change after that is free. To keep usernames unique, the app stores a record of each username with the account identifier it belongs to. Any signed-in user can read that record, even while your profile is private: it shows only that the username is taken and which account identifier holds it. Other signed-in users can find a public profile by typing the start of its username; private profiles and profiles hidden by moderation never show up.

**Public decks and collections.** Nothing you track is public unless you choose so. While your profile is public you can make a deck or a collection public, and the app then keeps a public copy of it with its name, its cover artwork, its description (decks) or kind (collections), and its cards as references: the card identifier, artwork and printing code of each one, plus the quantity and section (Main, Extra or Side) for a deck, or the rarity and whether you have the card for a collection. The copy never holds card names or card text, prices, the copies you own of a deck's cards, notes, or any link. Other users see card names and text from the card catalog, in their own language, not from your account. Other signed-in users can open the copy, and copy it into their own account, only while the deck or collection is public and your profile is public and not hidden by moderation; you are not told when someone copies it, and nothing in your account changes. Making the deck or collection private, or deleting it, deletes its copy, and making your profile private takes every copy out of view at once.

**Blocks.** When you block someone, the app stores their account identifier, their username and duelist name at that moment, and the date, in a list only you can read. A block works one way: you stop seeing that person in search, on their profile and on their public decks and collections, and no duel between the two of you can be recorded or confirmed. They are not told, and they can still see your profile if it is public. Duels you already played stay in both histories.

**Reports and moderation.** You can report a profile, a public deck or a public collection. The app sends the report to our moderation service, a Cloudflare Worker, with your sign-in token, which the service uses only to confirm which account is reporting. The service stores the report with your account identifier, what you reported and its owner, the reason, the text you wrote, the date, and a copy of the reported content as it was then (for a profile: username, duelist name, badges and visibility; for a deck or collection: its name, its description or kind, its owner, how many entries it has and which cards it holds). Only the moderator can read reports, and the person you reported is never told who reported them. Each new report is emailed to the moderator through Brevo, with that summary and your account identifier.

If the moderator hides your profile, deck or collection, the app tells you why, and you get an email at your account's address, sent through Brevo, with the reason and how to contest. Moderation hides content and never deletes it: a hidden profile leaves search and every other user's view, together with your public decks and collections, and comes back exactly as it was if the hide is lifted (you get an email then too). You cannot make a hidden item public again or delete it yourself while it is hidden. An account that keeps breaking the terms of use can be disabled.

**Purchase status.** We do not store your purchase in our database. Whether your account has Lifetime Access comes from RevenueCat (see below), and the purchase itself is processed by Apple or Google. We never see your payment details.

**Diagnostics.** When the app encounters an error we send technical details about the failure
so we can fix it. This includes device model, operating system version, and the error itself.

## What we do not collect

- Payment card details, billing addresses, or any financial information
- Location data
- Contacts, photos, or files, other than what you explicitly submit
- Advertising identifiers — the app contains no advertising and no cross-app tracking

The camera is used only to scan QR codes on your device: a deck someone shares as a QR code, or the code another player shows at the table to pair a duel. Scanned images are not stored or transmitted. A duel code holds a new duel identifier and the showing player's account identifier, username and duelist name; nothing is written when the phones pair, only when the result is sent.

## Where your data lives

Account and collection data is stored in Google Cloud Firestore. Access is restricted so that
only your signed-in account can read or write your own records, except the public parts described above, which other signed-in users can read only while you keep your profile public. Diagnostics are processed by
Sentry. Card artwork is served from Cloudflare R2 and involves no personal data.

The card catalog (the name and text of every card in your language, and an index of card names in English and Portuguese used by search) is downloaded from Cloudflare R2 and kept on your device. The files are the same for everyone and the request carries no account information. Card searches are sent to the public YGOPRODeck API, also without any account information.

Reports go through the moderation Worker (Cloudflare) to Firestore, and the emails about them, to the moderator and to the owner of hidden content, go through Brevo.

When you ask to reset your password, your email address goes through a Cloudflare Worker to
Brevo, which delivers the reset message from no-reply@ygotracker.app. The address is used only
to send that message.

Purchases are verified with RevenueCat, which receives your account identifier and the receipt
from Apple or Google so it can confirm the unlock. It does not receive your email or payment
details.

## This website

The YGO Tracker website uses no cookies, no advertising, and no cross-site tracking. We count
visits with Cloudflare Web Analytics, which reports page views in aggregate without cookies and
without identifying you. Links to the App Store and Google Play carry a campaign tag so we can see
how many installs started on this site; the tag does not identify you either.

## How long we keep it

Your data is retained while your account exists. Deleting your account from Settings removes
your collection data, account record, public profile, scoreboard and badges. A duel that the other
player confirmed stays in their history with your username, duelist name and account identifier
removed; duels nobody confirmed are deleted. Diagnostic reports are retained on a rolling window by
our error-reporting provider and are not linked to your collection data.

Deleting your account also deletes your username, the public copies of your decks and collections, your block list and your sign-in, and removes from your device what the app kept there for that account. A few things stay after it:

- **Reports.** Reports you sent and reports about your content are kept for the moderator.
- **Content hidden by moderation.** A profile, deck or collection hidden by moderation is not deleted with the account. It stays hidden, out of every user's view, and a hidden profile keeps its username taken, until the moderator removes it.
- **Other people's block lists.** If someone blocked you, their list keeps your username and duelist name as they were when they blocked you. That list is theirs, and only they can read it.

## Your choices

- **Delete your account.** Settings → Account → delete. This removes your data and your sign-in.
- **Export your data.** You can export your collections, decks and wishlist as CSV files, and share a collection as an image, at any time. The file or image is built on your device and goes only to the app you pick in the share sheet; we never receive it. Deck sharing also lets you copy a deck out of the app as a link, a QR code or a YDKe URL.
- **Keep your profile private.** Your profile, and so your scoreboard, is visible to others only while you set it to public in Settings → Account → Profile. Turning it private hides it again at once.
- **Choose what is public.** A deck or collection is public only while you turn on "Public on my profile" on it; turning it off deletes its public copy. Making your profile private hides all of them without deleting anything.
- **Block someone.** From their profile, one of their public decks or collections, or your duel history. Unblock in Settings → Account → Blocked users.
- **Report something.** From the profile, the public deck or collection, or your duel history.
- **Contest a moderation decision.** Write to the moderation contact, adrielfabricio.dev@gmail.com (also in Settings → About → Moderation contact), with your username and what was hidden.
- **Language and preferences** are stored on your device only and never leave it.

## Children

The app is not directed at children under 13, and we do not knowingly collect their data.

## Changes

If this policy changes materially we will update the date above and note the change in the app's
release notes.

## Contact

Questions about this policy: adrielfabricio.dev@gmail.com
