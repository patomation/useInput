import { useState } from 'react'

export type Value = string | number

export type UseInput = (initialValue: Value) => [{
  value: Value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
},
React.Dispatch<React.SetStateAction<Value>>
]

export const useInput: UseInput = (initialValue = '') => {
  // Set value to state and de-structure value and setter
  const [value, setValue] = useState(initialValue)

  // Handle input change
  const onChange = (e): void => {
    setValue(e.target.value)
  }

  // return array with input prop object and setter
  return [
    {
      value, // Input value prop
      onChange // Input on change handler
    },
    setValue // Allow Dispatching to set state
  ]
}
