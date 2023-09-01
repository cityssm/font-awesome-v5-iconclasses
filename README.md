# Font Awesome V5 Icon Classes

[![npm (scoped)](https://img.shields.io/npm/v/%40cityssm/font-awesome-v5-iconclasses)](https://www.npmjs.com/package/@cityssm/font-awesome-v5-iconclasses)
[![Maintainability](https://api.codeclimate.com/v1/badges/862a6c8243889a143aeb/maintainability)](https://codeclimate.com/github/cityssm/font-awesome-v5-iconclasses/maintainability)
[![DeepSource](https://app.deepsource.com/gh/cityssm/font-awesome-v5-iconclasses.svg/?label=active+issues&show_trend=true&token=HbrQdvk66zStAN8dgUpDF1uV)](https://app.deepsource.com/gh/cityssm/font-awesome-v5-iconclasses/?ref=repository-badge)
[![codecov](https://codecov.io/gh/cityssm/font-awesome-v5-iconclasses/graph/badge.svg?token=YN9VDY6NJX)](https://codecov.io/gh/cityssm/font-awesome-v5-iconclasses)

Font Awesome V5 class names, for lookups and more!

## Installation

```sh
npm install @cityssm/font-awesome-v5-iconclasses
```

## Usage

```javascript
import * as faIconClasses from '@cityssm/font-awesome-v5-iconclasses'

/*
 * Get icon classes by style
 */

const solidIconClassesA = await faIconClasses.getIconClassesByStyle('solid')
const solidIconClassesB = await faIconClasses.getSolidIconClasses()

const regularIconClassesA =
  await faIconClasses.getIconClassesByStyle('regular')
const regularIconClassesB = await faIconClasses.getRegularIconClasses()

const brandIconClassesA = await faIconClasses.getIconClassesByStyle('brands')
const brandIconClassesB = await faIconClasses.getBrandIconClasses()

/*
 * Icon classes DO NOT INCLUDE 'fa-' prefixes
 */

console.log(solidIconClassesA)

/*=>
[
  'ad',
  'address-book',
  'address-card',
  'adjust',
  'air-freshener',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'allergies',
  ...
]
*/
```

## Need More Icon Details?

Check out the [font-awesome-v5-icons](https://github.com/soul-wish/font-awesome-v5-icons) package.
