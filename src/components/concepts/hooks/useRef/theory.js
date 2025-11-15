// What is useRef ?
// useRef is a React hook that allows you to :
    // Access DOM elements directly (like document.getElementById() but in React way)

    // Store values that do not cause re-render 
        // (useState) --> when state changes component re-renders
        // useRef --> does not trigger re-render


// Why do we need useRef ?
// Without Ref :
    // You cannot directly access DOM elements
    // Cannot store values efficiently between rerenders
    // Cannot work with timers cleanly
    // cannot store mutable data without re-renders

// With Ref ?
    // access input fields
    // Focus/Scroll/Play/pause elements
    // Store previous values
    // Store any value without triggering UI updates

// Syntax :

    // const refName = useRef(initialValue);

    // refName.current - holds the actual value or DOM element.

// Major Points :
    // Chaning ref.current does not cause re-render.
    // useRef persists the value across renders
    // useRef returns the same object on every render
    // Popular use-cases :
        // DOM access
        // timers
        // Store config values
        // skip first render inside useEffect.


    