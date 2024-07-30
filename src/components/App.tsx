import Header from "./Header/Header";
import { MyRouter } from "./MyRouter";
import { Footer } from "./Footer";

export function App() {
  return (
    <div className="app">
      <Header />
      <MyRouter></MyRouter>
      <Footer />
    </div>
  );
}
