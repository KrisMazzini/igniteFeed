import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Kristopher Mazzini"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur aspernatur ipsa impedit! Tenetur a sint, obcaecati culpa ratione quia dignissimos quod error molestiae veritatis, enim quas repellat nobis in!"
      />
      <Post
        author="Maria Fernanda"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi excepturi accusamus, repellat et dignissimos quis vel. Molestias architecto, qui soluta ad suscipit excepturi quo debitis ipsa tenetur! Tenetur, modi!"
      />
    </div>
  )
}