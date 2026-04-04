import { Navbar } from '@/components/Navbar'
import { Layout } from '@/components/Layout'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Layout
        roulette={<p className="font-mono text-xs text-star-300">roulette</p>}
        info={<p className="font-mono text-xs text-star-300">info</p>}
        scene={<p className="font-mono text-xs text-star-300">scene</p>}
      />
    </div>
  )
}

export default App
