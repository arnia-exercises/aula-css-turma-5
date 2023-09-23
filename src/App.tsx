import { useState } from "react"
import { Container, Global } from "./assets/styles/global"
import Input from "./components/ui/forms/input"
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <Global />
      <Container>
        <Input
          id="email"
          label="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          hasError={!emailRegex.test(email)}
        />
        <Input
          id="password"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          onIcon={() => setShowPassword(!showPassword)}
        />
    </Container>
    </>
  )
}

export default App
