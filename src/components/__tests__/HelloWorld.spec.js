import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import Homepage from '../Homepage.vue'

describe('Homepage', () => {
  it('renders properly', () => {
    const wrapper = mount(Homepage, {})
    expect(wrapper.text()).toContain('Slime')
  })
})
