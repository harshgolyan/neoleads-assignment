import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"

export default function App () {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}