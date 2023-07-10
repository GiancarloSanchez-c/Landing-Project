import { Header, Banner, Eventos, Navbar, Footer } from "../components";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="main">
        <Banner />
        <Eventos />
        <Footer />
      </main>
    </>
  );
};
