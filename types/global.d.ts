// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FixMeLater = any;
type IsActive = boolean;
interface cardMovie {
  title: string
  release_date: string
  overview: string;
}

declare module '*.svg' {
  const content: string
  export default content
}
