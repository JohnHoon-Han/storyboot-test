interface IIconButton {
  alt: string
  iconPath: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
export default function IconButton({ alt, iconPath, onClick }: IIconButton) {
  return (
    <button className="bg-none p-0" onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  )
}
