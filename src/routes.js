import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';

import Seguimiento from './pages/Seguimiento';
import AuditoriaMovil from './pages/AuditoriaMovil';
import Rutas from './pages/Rutas';
import Zonas from './pages/zonas';
import MantenedorRutas from './pages/MantenedorRutas';
import Alertas from './pages/Alertas';
import Conductores from './pages/Conductores';
import Moviles from './pages/Moviles';
import Descargas from './pages/Descargas';
import Torrecontrol from './pages/Tcontrol';
import Manifiesto from './pages/Manifiesto';
import Sipnoticos from './pages/Sipnoticos';
import PaginaConstruccion from './pages/PaginaConstruccion';

//import Error from './pages/Error';
import Aside from './components/Aside';



const Routes = () => {
    return (
        <Router>
            <Aside />
            <Route exact path='/' component={Dashboard} />
            <Route path='/perfil' component={Perfil} />
            <Route path='/Seguimiento' component={Seguimiento} />
            <Route path='/AuditoriaMovil' component={AuditoriaMovil} />
            <Route path='/Rutas' component={Rutas} />
            <Route path='/Zonas' component={Zonas} />
            <Route path='/MantenedorRutas' component={MantenedorRutas} />
            <Route path='/Alertas' component={Alertas} />
            <Route path='/Conductores' component={Conductores} />
            <Route path='/Moviles' component={Moviles} />
            <Route path='/Descargas' component={Descargas} />
            <Route path='/Torrecontrol' component={Torrecontrol} />
            <Route path='/Manifiesto' component={Manifiesto} />
            <Route path='/Sipnoticos' component={Sipnoticos} />
            <Route path='/PaginaConstruccion' component={PaginaConstruccion} />
        </Router>
    )
}

export default Routes;