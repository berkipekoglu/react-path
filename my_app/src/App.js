import './App.css';
import HelloWorld from './components/HelloWorld'
import CyberpunkButton from './components/CyberpunkButton';

function App() {
  return (
    <div>
      Merhaba
      <HelloWorld name="Berk" age={24} job="Front-End Developer">
        Buraya yazılan html ifadeler component'e children olarak aktarılır.
        
        <span style={{display:'block', marginTop:5}}>Children: Span Etiketi</span>
      </HelloWorld>
      <CyberpunkButton name="Berk" code="R24" />
    </div>
  );
}

export default App;
