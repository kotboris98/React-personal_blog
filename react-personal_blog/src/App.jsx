import './App.css'
import Header from './components/Header'
import handleClick from './components/Button'
import MyStack from './components/MyStack'
import SocialMedia from './components/SocialMedia'


function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <MyStack />
          <SocialMedia />
        </main>
      </div>
    </>
  )
}

export default App
