import test from 'node:test'
import assert from 'node:assert/strict'
import { BRANDS, getBrand, splitBrand } from '../src/lib/brand.js'

test('known brands expose their stylized name and accent character', () => {
  assert.equal(getBrand('dscpln').name, 'D$CPLN')
  assert.equal(getBrand('watxt').name, 'W@TXT')
  assert.equal(getBrand('fl0w').name, 'FL0W')
  assert.equal(getBrand('da5h').name, 'DA5H')
})

test('unknown brands fall back to D$CPLN', () => {
  assert.equal(getBrand('nope'), BRANDS.dscpln)
})

test('splitBrand wraps only the accent character', () => {
  assert.deepEqual(splitBrand(getBrand('dscpln')), { before: 'D', accent: '$', after: 'CPLN' })
  assert.deepEqual(splitBrand(getBrand('watxt')), { before: 'W', accent: '@', after: 'TXT' })
  assert.deepEqual(splitBrand(getBrand('fl0w')), { before: 'FL', accent: '0', after: 'W' })
  assert.deepEqual(splitBrand(getBrand('da5h')), { before: 'DA', accent: '5', after: 'H' })
})

test('splitBrand leaves names without the accent whole', () => {
  assert.deepEqual(splitBrand({ name: 'PLAIN', accentChar: '!' }), { before: 'PLAIN', accent: '', after: '' })
})
