import { Route, Routes } from "react-router-dom"

import Nav from "./components/Nav"
import Header from "./Header"

import Issue from "./pages/Issue"
import CreateIssue from "./pages/CreateIssue"
import Projects from "./pages/Projects"
import PullRequest from "./pages/PullRequest"
import Code from "./pages/Code"
import Security from "./pages/Security"
import Actions from "./pages/Actions"
import { QueryClientProvider, QueryClient } from "react-query"

/**
 * ContextAPI - 전역적인 정보를 prop drilling 없이 사용할 때
 * -> 굳이 사용하지 않아도 된다면,
 * hooks로 빼내어 사용한다.
 * -> hooks로 선언한 부분이 반복적으로 네트워크 콜을 유발한다면, cache를 통해서 개선헤볼 수 있을 것.
 */

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
