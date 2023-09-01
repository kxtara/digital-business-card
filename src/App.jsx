import Intro from "./components/Intro";
import MainContent from "./components/MainContent";
import Footer from "./components/footer";
function App() {
  return (
    < div className="flex items-center justify-center mt-5 mb-5 md:h-[100vh] lg:h-[100vh]">
      <div className="flex flex-col items-center bg-[#1a1b20] rounded-xl text-[#fafbfd] w-[21rem] mb-4 shadow-[0_0_10px_3px_rgba(255,255,255,0.1)]">
       <Intro />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;