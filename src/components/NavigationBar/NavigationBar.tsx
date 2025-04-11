import IconButton from '../IconButton'

interface INavigationBarProps {
  isDark: boolean
  showTitle: boolean
  showBackButton: boolean
  showCloseButton: boolean
  title?: string
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = '',
  onCloseButtonClick = () => {},
  onBackButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <div className="flex w-flex justify-between">
      <div className="navigation-title-wrapper flex">
        {/* {history back} */}
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${
              isDark ? '-white' : ''
            }.svg`}
            onClick={onCloseButtonClick}></IconButton>
        )}
        {/* {title} */}
        {showTitle && (
          <h1
            className={`font-700 text-2xl tracking-0 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
            {title}
          </h1>
        )}
      </div>
      {/* {close} */}
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${
            isDark ? '-white' : ''
          }.svg`}
          onClick={onBackButtonClick}></IconButton>
      )}
    </div>
  )
}
