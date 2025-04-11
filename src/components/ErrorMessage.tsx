interface IErrorMessage {
  children: string
}
export default function ErrorMessage({ children }: IErrorMessage) {
  return <p className="text-xs text-error">{children}</p>
}
