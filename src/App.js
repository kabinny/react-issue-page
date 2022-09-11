import { useEffect, useState } from "react"
import "./App.css"

// useEffect
/**
 * mount ( = 리액트 컴포넌트가 그려질 떄, 렌더될 때)
 * unmount ( = 리액트 컴포넌트가 사라질 때, 지워질 때)
 * update ( = 특정 값이 변해서 리액트 컴포넌트가 다시 그려질 때)
 *
 */

// hook 사용 규칙
// 1. 최상위에서 호출되어야 한다.
// 2. 오직 React 함수에서만 hook을 호출해야 한다.

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 5) {
      console.log("This is five")
    }
  }, [count])

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
