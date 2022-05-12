import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}





/* function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h2>Visiting all over the world!!!</h2>
      <h4>Available Countries: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h3>Country Name: {props.name}</h3>
      <h4>Population: {props.population}</h4>
    </div>
  )
} */
export default App;
