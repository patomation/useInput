import * as React from 'react'
import { mount } from 'enzyme'

import { useInput } from './index'

const Input = (): React.ReactElement => {
  const [{ value, onChange }] = useInput('test-value')

  return (
    <input value={value} onChange={onChange} />
  )
}

describe('useInput()', () => {
  it('renders input component correctly', () => {
    mount(<Input />)
  })
})
