# Most used React Hooks

Repository to help developers to learn the most used React Hooks with examples.

It can be also used as a reference.

If you are learning React, I recommend that you try them on this order:

1. useState
    - The most famous React Hook, used to change the state of a component and re-render it.
2. useEffect
    - Used to change the state of the component when something happens, which is not triggered by UI/user.
    - Good examples of usage are: when the component mounts, when a state variable(s) changes, and when a component is unmounted.
3. useRef
    - Similar to useState, however it does not re-render the component.
    - Usage 1: So, you update the state, but this will not trigger a component re-render as useState does.
    - Usage 2: A ref can be used on an HTML element to access its properties.
    - Usage 3: Can be used to store a previous value from useState.
4. useReducer
    - Similar to useState, but it can manipulate more than one state at once.
    - Used for more complex states with more variables within it.
5. useContext
    - useContext is used to share states between parents and children components within the work tree.
    - The first step is to create a Context Provider which contains the states to be shared.
    - The second step is to use the useContext hook as shown on the example.
6. useMemo
    - Used to improve the performance of the component and application.
    - Similarly to useEffect, you can use deps to run the costly function only when needed. The current state is kept in memory.
7. useCallback
    - Used to improve the performance of the component and application.
    - Used with functions, the function will be recreated only if the deps of useCallback are changed, otherwise it´ll be kept in memory.
    - useCallback stores the function, while useMemo stores the result (return) of the function.
    - Used when you are passing a function as a prop.
8. useLayoutEffect
    - Very similar to useEffect, the main difference is that useEffect will run after the DOM is already mounted, while useLayoutEffect will be mounted before the DOM is mounted.
    - A good example is: let´s say you have a text that is moved upon load, if you use useEffect you should see it moving after the DOM is mounted, while useLayoutEffect will put the element in the correct position as it will run before the DOM is mounted.
    - You can see on the example that "Text 2" will always be shown first on console than "Text 1". And (it´s sometimes hard to notice), but you should see, upon the component´s reload, that "Text 1" is moving, while "Text 2" does not while changing their margin.