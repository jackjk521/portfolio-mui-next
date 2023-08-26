// Components
import Navbar from "./navbar";
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <>
      {/* Navigation bar  */}
      <Navbar />

      <main>{children}</main>

      {/* Footer  */}
      <Footer/>
    </>
  );
}
