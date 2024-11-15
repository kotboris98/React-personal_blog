import { stack } from '../data'
import MyExperience from './MyExperience'

export default function MyStack() {
    return (
        <section>
        <h1>Мой стек</h1>
        <ul>
          <MyExperience
            title={stack[0].title}
            description={stack[0].description}
          />
          <MyExperience {...stack[1]}/>
          <MyExperience {...stack[2]}/>
        </ul>
      </section>
    )
}