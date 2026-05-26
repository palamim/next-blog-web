import type { AppProps } from "next/app";
import { GlobalStyle } from "src/atomic/obj.globals/global.style";
import Footer from "src/atomic/org.footer/footer.component";
import Header from "src/atomic/org.header/header.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
