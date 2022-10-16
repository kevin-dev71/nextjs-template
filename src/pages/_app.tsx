import type { AppProps } from "next/app"

import "../styles/globals.scss"

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("src/__mocks__").then(({ setupMocks }) => {
    setupMocks()
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
