---
title: 'Yu-Gi-Oh! collection spreadsheet: what to track and how to work out what is missing'
description: 'How to build a spreadsheet for your Yu-Gi-Oh! cards: the columns, the missing-cards formula, the estimated cost of a deck and when an app saves you time.'
seoTitle: 'Yu-Gi-Oh! Collection Spreadsheet | YGO Tracker'
locale: 'en'
published: 2026-10-16
---

A spreadsheet is the most common way to start tracking a Yu-Gi-Oh! collection. It is free, works on a computer and on a phone, and you decide what to record. The trouble usually starts later, when the collection grows and the sheet stops getting updated.

This guide shows how to build a spreadsheet that answers the questions that matter: what you own, what each deck is missing and how much is left to spend.

## The columns that make a difference

One row per card. These columns are worth having:

| Column     | Example                     | Why it helps                                    |
| ---------- | --------------------------- | ----------------------------------------------- |
| Name       | Ash Blossom & Joyous Spring | Search shops and decklists                      |
| Set code   | MACR-EN036                  | Tell apart printings with different prices      |
| Rarity     | Secret Rare                 | The same card can vary a lot in price by rarity |
| Needed     | 3                           | How many copies the deck calls for              |
| Owned      | 1                           | How many copies you already have                |
| Ref. price | 5.00                        | A price you saw at a shop                       |

If you play more than one deck, add a tab per deck with the **Needed** and **Owned** columns, plus a general tab for the whole collection.

## The missing-cards formula

With **Needed** in column D and **Owned** in column E, add a **Missing** column (column G) with:

```text
=MAX(0, D2-E2)
```

`MAX` with zero keeps the result from going negative when you own more copies than the deck needs.

## The estimated cost of a deck

With **Missing** in column G and the **Reference price** in column F, the total still to buy is:

```text
=SUMPRODUCT(G2:G100, F2:F100)
```

Treat it as an estimate: prices change from shop to shop and week to week, so check again before you buy.

## Where spreadsheets usually break down

A spreadsheet works as long as you keep it current. The usual problems:

- **Editing on a phone is a chore.** Opened a pack at the shop? Tapping a tiny cell on your phone is exactly when the update gets left for later.
- **The same card in several decks.** If Effect Veiler is in two decks, you have to remember to update both tabs.
- **No signal, no sheet.** Online spreadsheets do not always open well when the bars disappear, which is what happens at the back of the shop.

## When an app is worth it

If you only track one binder, a spreadsheet is enough. Once you build physical decks and want to know what each one is still missing, an app made for it saves time.

[YGO Tracker](/en) does the math in this guide for you:

- **Decks with progress:** say how many copies the deck needs and how many you own, and the app shows how complete it is and roughly what the rest will cost.
- **Search in English or Portuguese:** find a card by either name.
- **Set collections:** import a whole set and tick cards off as they arrive.
- **Shopping list:** copy what is missing and take it to the shop.
- **Works offline:** ticking cards and adjusting quantities does not need a signal.

It is free to start, with 2 active decks, up to 25 wishlist items and up to 2 collections.
