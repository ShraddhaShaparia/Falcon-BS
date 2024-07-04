import Header from "./Header/Header";
import { MyRouter } from "./MyRouter";
import { Footer } from "./Footer";
import MobileHeader from "./Header/MobileHeader";

export function App() {
  return (
    <div className="app">
      <Header />
      <MyRouter></MyRouter>
      <Footer />
    </div>
  );
}
