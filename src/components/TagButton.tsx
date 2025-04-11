interface ITagButtonProps {
  isChecked: boolean
  children: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function TagButton({
  isChecked,
  children,
  onClick,
}: ITagButtonProps) {
  const checkedStyle = isChecked
    ? 'bg-dark-opacity text-primary border-primary'
    : 'bg-primary text-white border-white'
  return (
    <button
      className={`text-sm font-medium rounded-[17.5px] px-[10px] h-[33px] border ${checkedStyle}`}
      onClick={onClick}>
      {children}
    </button>
  )
}
