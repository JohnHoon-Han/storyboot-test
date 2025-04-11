type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text'

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme
  isDisabled: boolean
  children: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const dark = 'bg-primary text-white'
const light = 'bg-white text-primary'
const social = 'bg-social text-white'
const text = 'bg-transparent text-white'
const disabledStyle =
  'disabled:bg-mono100 disabled:text-mono200 disabled:cursor-auto'
const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
}

export default function PrimaryButton({
  theme,
  isDisabled,
  children,
  onClick = () => {},
}: IPrimaryButtonProps) {
  return (
    <button
      className={`w-full h-[59px] rounded-md cursor-pointer  ${color[theme]} ${disabledStyle}`}
      disabled={isDisabled}
      onClick={onClick}>
      {children}
    </button>
  )
}
