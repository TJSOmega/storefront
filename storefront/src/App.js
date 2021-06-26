import { Provider } from 'react-redux'
import { CssBaseline } from "@material-ui/core";


import store from './store/'
import Header from './components/Header.js'
import Footer from './components/Footer'

function App() {
  return (

    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Footer />
    </Provider>

  );
}

export default App;
