import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar.js';
import { reducir, sumar } from '../components/Numerology.js';
import { AuthContext } from '../components/AuthContext.js';
import symbOne from '../assets/1-Circulo.webp';
import symbTwo from '../assets/2-Vesica-Piscis.webp';
import symbThree from '../assets/3-Triangulo.webp';
import symbFour from '../assets/4-Tetraedro.webp';
import symbFive from '../assets/5-Pentagono.webp';
import symbSix from '../assets/6-Magendavid.webp';
import symbSeven from '../assets/7-Dios.webp';
import symbEight from '../assets/8-Infinito.webp';
import symbNine from '../assets/9-Merkabah.webp';

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const anio = date.getFullYear();
const todaysNumber = reducir(sumar([dia, mes, anio]));
const diaText = [
  "Los días 1 son indicio de nuevos comienzos ! Hoy es un gran día para la aventura !",
  "Los días 2 son para socializar. Ve a ver a tus amigos !",
  "Los días 3 son excelentes para conversar, dar charlas, o conocer gente nueva.",
  "Los días 4 son días para organizar o para realizar aquello que hace mucho debes hacer",
  "Los días 5 son perfectos para divertirse ! Hoy no esperes la misma rutina",
  "Los días 6 son para ser detallistas. A todos les gustan los detalles, no ?",
  "Los días 7 son especiales. Hoy puede ser un día mágico !",
  "Los días 8 son para aprovechar oportunidades. Ve en busca de tus sueños !",
  "Los días 9 son algo difíciles. Puede que ayudes a alguien o que necesites la ayuda de alguien"
]
const diaPersonal = [
  "Tu día personal es 1, así que es un buen día para que des el primer paso !",
  "Tu día personal es 2, así que aprovecha bien tu paciencia extra",
  "Tu día personal es 3, hoy quizás expreses más de lo habitual o tengas mucha euforia, así que diviértete !",
  "Tu día personal es 4, revisa el día universal y tus deberes del día. Hoy es para hacer lo correcto y/o organizar",
  "Tu día personal es 5, así que quizás sea difícil decir algo sobre tu día; será un día distinto !",
  "Tu día personal es 6, tu detallismo brillará hoy, ponlo en uso según el día universal !",
  "Tu día personal es 7, no te encierres demasiado pero quizás hoy pienses y reflexiones más de lo habitual",
  "Tu día personal es 8, la potencia del infinito vibra contigo hoy, tú puedes !",
  "Tu día personal es 9, hoy darás y/o perderás. Se trata de aprender a soltar"
]

export default function Home() {
  const { user } = useContext(AuthContext);
  const personalNumber = user ? reducir(reducir(sumar([user.day,user.month,user.year])) + todaysNumber) : 0;

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2">
          <Sidebar />
        </div>
        <div className="col-10 col-sm-8">
          <div style={{height: '20vh'}}></div>
          <h1 className="numeroDelDia">Hoy es un día {todaysNumber} !</h1><br /> <br />
          <p style={{textAlign:'center', fontWeight:'700'}}>&diams; {diaText[todaysNumber-1]}</p>
          {
            user ? <p style={{textAlign:'center', fontWeight:'700'}}>&diams; {diaPersonal[personalNumber-1]} </p> : <p style={{textAlign:'center',fontSize:"10px"}}> (recuerda que es importante analizar esto siempre en conjunto con tus propios números)</p>
          }
          <div className="halfPage"></div>
          <section>
            <h1 id="section0">¿ Qué es la Numerología ?</h1><br />
            <p>La numerología es una antigua disciplina que busca asociar un significado a un concepto abstracto relativo a algún número.
              Esto deriva en aplicaciones muy variadas utilizando nombres, nacimientos, fechas, direcciones y más.
              Para entender la Numerología es necesario comprender el significado abstracto de los números, por éso vamos a ver una breve definición de cada uno:</p>
            </section>
          <div className="halfPage"></div>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section1">El número 1</h2>
            <p>El número uno indica tanto la individualidad como la grupalidad.
              Se refiere a los comportamientos como "unidad", al "todo", y a los sentimientos asociados a los mismos.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Independencia</dd>
                <dd>&diams; Iniciativa</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Egocentrismo</dd>
                <dd>&diams; Egoísmo</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Tiranía</dd>
                <dd>&diams; Intolerancia</dd>
            </dl>
          </section>
        </div>
        <div className="col-5 col-sm-4">
          <img src={symbOne} className="symbols" alt="Circulo" />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <img src={symbTwo} className="symbols" alt="Vesica Piscis" />
        </div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section2">El Número 2</h2>
            <p>El número dos representa la dualidad, el contraste, la rivalidad y la oposición.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Generosidad</dd>
                <dd>&diams; Cooperación</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Timidez</dd>
                <dd>&diams; Dubitación</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Cobardía</dd>
                <dd>&diams; Decepción</dd>
            </dl>
          </section>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section3">El Número 3</h2>
            <p>El tres nace de la suma/asociación del 1 y el 2, simbolizando la tríada inicio-centro-final.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Optimismo</dd>
                <dd>&diams; Expresión</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Pesimismo</dd>
                <dd>&diams; Represión</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Celos</dd>
                <dd>&diams; Hipocresía</dd>
            </dl>
          </section>
        </div>
        <div className="col-5 col-sm-4">
          <img src={symbThree} className="symbols" alt="Triangulo" />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <img src={symbFour} className="symbols" alt="Tetraedro" />
        </div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section4">El Número 4</h2>
            <p>El número cuatro representa el nuevo inicio (1) después del primer fin (3), simbolizado por el cuadrado y asociado a lo ideal y correcto.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Honestidad</dd>
                <dd>&diams; Lealtad</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Rigurosidad</dd>
                <dd>&diams; Terquedad</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Violencia</dd>
                <dd>&diams; Crueldad</dd>
            </dl>
          </section>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section5">El Número 5</h2>
            <p>El cinco está asociado a los sentidos y las experiencias.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Libertad</dd>
                <dd>&diams; Versatilidad</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Irresponsabilidad</dd>
                <dd>&diams; Mutabilidad</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Perversión</dd>
                <dd>&diams; Malevolencia</dd>
            </dl>
          </section>
        </div>
        <div className="col-5 col-sm-4">
          <img src={symbFive} className="symbols" alt="Pentagono" />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <img src={symbSix} className="symbols" alt="Triangulos Invertidos" />
        </div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section6">El Número 6</h2>
            <p>Es el número de la armonía y la naturaleza simbolizado por el hexágono.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Responsabilidad</dd>
                <dd>&diams; Servicial</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Ansiedad</dd>
                <dd>&diams; Preocupación</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Cinismo</dd>
                <dd>&diams; Tiranía</dd>
            </dl>
          </section>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section7">El Número 7</h2>
            <p>Es el número que está por encima de lo natural (6), asociado a lo divino y al tiempo.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Sabiduría</dd>
                <dd>&diams; Espiritualidad</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Melancolía</dd>
                <dd>&diams; Frialdad</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Deshonestidad</dd>
                <dd>&diams; Infidelidad</dd>
            </dl>
          </section>
        </div>
        <div className="col-5 col-sm-4">
          <img src={symbSeven} className="symbols" alt="Divinidad" />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <img src={symbEight} className="symbols" alt="Infinito" />
        </div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section8">El Número 8</h2>
            <p>El ocho es también el símbolo del infinito y es la figura del equilibrio y de la integración de todos los contrastes y posibilidades.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Autoridad</dd>
                <dd>&diams; Liderazgo</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Impaciencia</dd>
                <dd>&diams; Crueldad</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Opresión</dd>
                <dd>&diams; Injusticia</dd>
            </dl>
          </section>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section9">El Número 9</h2>
            <p>El nueve es el último proceso humano dentro de la numerología, culminando una triple triada (3x3) de estados evolutivos.</p>
            <dl>
              <dt>Aspectos positivos</dt>
                <dd>&diams; Compasión</dd>
                <dd>&diams; Filantropía</dd>
              <dt>Aspectos negativos</dt>
                <dd>&diams; Indiscresión</dd>
                <dd>&diams; Disipación</dd>
              <dt>Aspectos destructivos</dt>
                <dd>&diams; Inmoralidad</dd>
                <dd>&diams; Amargura</dd>
            </dl>
          </section>
        </div>
        <div className="col-5 col-sm-4">
          <img src={symbNine} className="symbols" alt="Merkabah" />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4">
          <img src={symbOne} className="zero" alt="Circulo" />
        </div>
        <div className="col-5 col-sm-4">
          <section>
            <h2 id="section00">El Número 0</h2>
            <p>El cero significa lo eterno, el universo, y el crecimiento potencial del que evolucionan los nueve dígitos.
              Es un símbolo inrepresentable en lo terrenal y, por tanto, se lo asocia a una fuerza creadora superior.</p>
          </section>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="halfPage"></div>
    </main>
  )
}