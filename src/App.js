import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import Navigation from './components/Navigation';
import Content from './components/Content';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WebHeader from './components/WebHeader';
import WebBanner from './components/WebBanner';
import WebContent from './components/WebContent';
import WebFooter from './components/WebFooter';
function App() {
  return (
    <div className="App">
    {/* <div className="Header"><MyHeader /></div>
    <div className="Navigation"><Navigation /></div>
    <div className="BoxContent">
    <div className="Content"><Content /></div>
    <div className="MainContent"><MainContent /></div>
    <div className="Content"><Content /></div>
    </div>
     <Footer /> */}
     <WebHeader />
     <WebBanner />
     <WebContent />
     <WebFooter />
    </div>
  );
}

export default App;
