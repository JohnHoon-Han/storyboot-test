import { useState } from 'react'
import { flexColCenter } from '../mixins/styles'
import DefaultTextField from './DefaultTextField'
import Label from './Label'
import PrimaryButton from './PrimaryButton'

interface ILoginFormProps {
  iconPath: string
  iconAlt: string
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function LoginForm({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ILoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <div>
        <Label children="Email" htmlFor="" />
        <DefaultTextField
          id="email"
          errorMessage="이메일을 입력해주세요"
          iconPath="/icons/ic-public-delete-dark.svg"
          iconAlt="delete"
          onIconClick={() => setEmail('')}
          placeholder="이메일을 입력해주세요"
          onChange={e => setEmail(e.target.value)}
          value={email}
          isError={email == ''}
        />
      </div>
      <div>
        <Label children="Email" htmlFor="" />
        <DefaultTextField
          id="password"
          errorMessage="비밀번호를 입력해주세요"
          iconPath="/icons/ic-public-delete-dark.svg"
          iconAlt="delete"
          onIconClick={() => setPassword('')}
          placeholder="비밀번호를 입력해주세요"
          onChange={e => setPassword(e.target.value)}
          value={password}
          isError={password == ''}
        />
      </div>
      <PrimaryButton
        children="로그인"
        isDisabled={!email || !password}
        theme="dark"
        onClick={() => {}}
      />
      <button
        className={`
        border
        rounded-md
        border-primary
        text-base
        font-bold
        pl-[22px]
        pr-[21px]
        py-4
        ${flexColCenter}
      `}
        onClick={onClick}>
        <img src={iconPath} alt={iconAlt} />
        <p>{text}</p>
      </button>
    </div>
  )
}
