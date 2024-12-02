import React from 'react';
import './App.css';
import logo from './img/dispensador.png';
import consulta1 from './img/consulta1.png';
import consulta2 from './img/consulta2.png';
import consulta3 from './img/consulta3.jpg';
import consulta4 from './img/consulta4.jpg';
import consulta5 from './img/consulta5.jpg';
import consulta6 from './img/consulta6.jpg';
import consulta7 from './img/consulta7.jpg';
import consulta8 from './img/consulta8.jpg';
import consulta9 from './img/consulta9.jpg';

function App() {
  return (
    <div>
      {/* Cabecera */}
      <header>
        <h1>GRIFO TATE S.R.L</h1>
      </header>

      {/* Menú */}
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
        </ul>
      </nav>

     {/* Cards Mini */}
<div className="title-cards_mini">
  <h2>Gráficos estadísticos de la empresa Grifo Tate S.R.L</h2>
</div>
<div className="container-card_mini">
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
   
      <img src={consulta1} alt="Consulta 1" />
    </a>
    <div className="contenido-card_mini">
      <h3>Consulta de total de clientes por provincia</h3>
      <p>Podemos crear la identidad corporativa de tu empresa.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta2} alt="Consulta 2" />
    </a>
    <div className="contenido-card_mini">
      <h3>Consulta de Personas y empresas Asociadas</h3>
      <p>Detalles sobre los principales clientes.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta3} alt="Consulta 3" />
    </a>
    <div className="contenido-card_mini">
      <h3>Unidades vendidas por Productos</h3>
      <p>Información sobre las unidades de productos vendidos.</p>
    </div>
  </div>
</div>
<div className="container-card_mini">
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta4} alt="Consulta 4" />
    </a>
    <div className="contenido-card_mini">
      <h3>Empleados y Ventas</h3>
      <p>Podemos identificar a los empleados más capacitados por sus ventas.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta5} alt="Consulta 5" />
    </a>
    <div className="contenido-card_mini">
      <h3>Stock Actual</h3>
      <p>Conoce el inventario actual en detalle.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta6} alt="Consulta 6" />
    </a>
    <div className="contenido-card_mini">
      <h3>Gestión de Entradas</h3>
      <p>Gestiona las cantidades compradas por producto.</p>
    </div>
  </div>
</div>
<div className="container-card_mini">
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta7} alt="Consulta 7" />
    </a>
    <div className="contenido-card_mini">
      <h3>Gestión de Salidas</h3>
      <p>Gestiona las cantidades vendidas por producto.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta8} alt="Consulta 8" />
    </a>
    <div className="contenido-card_mini">
      <h3>Caducidad de Productos</h3>
      <p>Consulta el tiempo de vida útil de cada producto.</p>
    </div>
  </div>
  <div className="card_mini">
    <a href="https://app.powerbi.com/view?r=eyJrIjoiMGZiMTIxNmEtZGM5MC00MmUwLTg4MmMtMmNhNzkxZjA5YWYyIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" target="_blank" rel="noopener noreferrer">
      <img src={consulta9} alt="Consulta 9" />
    </a>
    <div className="contenido-card_mini">
      <h3>Comprobantes más Usados</h3>
      <p>Identifica los comprobantes más empleados por la empresa.</p>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h3>Profesor y Curso</h3>
            <p>MELENDEZ RAMOS,JULIO GENARO</p>
            <p>Ingeniería de Sistemas</p>
          </div>
          <div>
            <h3>Integrantes</h3>
            <p>Muñoz Hernandez Johann Rolando</p>
            <p>Cristhofer Jhonny Elias Uribe</p>
            <p>Flores Ñañacc-huari Alexis</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
