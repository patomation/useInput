
# useInput hook for React functional components
I was getting tired of having to write a handle change function for inputs and thought it would be nice if there was a more eligant solution to handle inputs. Especially when you end up with several inputs in one component you end up with a messy set  of useState and handlers.

This component works much like useState instead of returning an value, setter tuple it returns a tuple with and object whose keys are value and on change and the normal setter function. This is explained bellow in the usage. 

## Installation
```
yarn add @patomation/useinput
```
or
```
npm install @patomation/useinput --save
```

## Usage

#### Simplest example
With this the input object contains { value, onChange }. So when the <input> has a change the onChange handles setting the input for you.
```javascript
import React from 'react'
import { useInput } from '@patomation/useinput'

const App = () => {
  const [ myInput ] = useInput('my initial value')

  return (
    <input {...myInput}/>
  )
}
```
#### USE STATE way = extra work
Simply using useState would create extra work writing handlers. For example.
```javascript
import React from 'react'
import { useInput } from '@patomation/useinput'

const App = () => {
  const [ myInput, setMyInput ] = useState('my initial value')

  return (
    <input value={myInput} onChange={(e) => setMyInput(e.target.value)}/>
  )
}
```

#### A more extended example:
This example shows how you could still set the value of the input from somewhere else if you needed to. Also it de-structures the value and onChange handler.  
```javascript
import React from 'react'
import { useInput } from '@patomation/useinput'

const App = () => {
  const [ {value, onChange}, setInputValue ] = useInput('my initial value')

  return (
    <section>
      <button onClick={() => { setInputValue('something else') }}> Set Value </button>
      <input value={value} onChange={onChange} />
    </section>
  )
}

```

#### Form submit example
In order to do something with the input value you would just refer to it like so:  ```myInput.value```. It's a small trade off to not have to handle input changes. 
```javascript
import React from 'react'
import { useInput } from '@patomation/useinput'

const App = () => {
  const [ userName ] = useInput()
  const [ password ] = useInput()

  const handleSubmit = () => {
    login(
      userName.value,
      password.value
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input {...userName} />
      <input {...password} type='password' />
      <button type='submit'>Login</button>
    </form>
  )
}

```

## Going Forward
#### Numbered Inputs
It would be nice to be able to handle numbers instead of how the input treats them as strings.
being able to use ```e.target.valueAsNumber``` for example would be great. Otherwise you would have to use ```parseInt(myInput.value)```