// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FixMeLater = any

declare module '*.svg' {
  const content: string
  export default content
}
