# Getting Started with React Hooks

Examples of the main React Hooks, to demonstrate how to use them in small projects. Custom hook library to use for every small app in the projec

## src/components

## 01-useState

based on useState we create the useCounter custom hook to increase a counter

## 02-useEffect

based on useEffect we create the useFetch custom hook to request an API and the useForm custom hook to state and keep track of a form include the state and handleInput and handleSubmit functions

## 03-samples

smalls apps based on hooks and custom hooks

- MultipleCustomHook : A Breaking Bad Quotes API, implemented using the useFetch and useCounter custom hooks to request the API and load a new quote

## 04-useRef

useRef basic example, used to improve the useFetch custom hook allow to conditionnaly load it when the component who call this useFetch custom hook is mounted, and avoid render it if the component (who is call it) is unmounted
