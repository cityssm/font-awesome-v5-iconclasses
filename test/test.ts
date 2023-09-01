import assert from 'node:assert'

import {
  getBrandIconClasses,
  getRegularIconClasses,
  getSolidIconClasses
} from '../index.js'

describe('font-awesome-v5-iconclasses', () => {
  it('Returns solid icon classes', async () => {
    const iconClasses = await getSolidIconClasses()
    console.log(iconClasses)
    assert.ok(iconClasses.length > 0)
  })

  it('Returns regular icon classes', async () => {
    const iconClasses = await getRegularIconClasses()
    console.log(iconClasses)
    assert.ok(iconClasses.length > 0)
  })

  it('Returns brand icon classes', async () => {
    const iconClasses = await getBrandIconClasses()
    console.log(iconClasses)
    assert.ok(iconClasses.length > 0)
  })
})
