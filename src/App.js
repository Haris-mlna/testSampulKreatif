import "./App.css";
import { useState } from "react";

function App() {
  const [numberOne, setNumberOne] = useState({ a: 0, b: 0 });
  const [aNumber, setANumber] = useState(0);
  const [bNumber, setBNumber] = useState(0);
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(2);
  const [three, setThree] = useState(2);
  const [four, setFour] = useState(5);
  const [five, setFive] = useState(4);
  const [six, setSix] = useState(4);
  const [seven, setSeven] = useState(1);

  const result = (a, b) => {
    if (a <= 5) {
      b = 2 + a;
      return { a: a++, b: b * 2 };
    } else if (b > a) {
      let c = 1;
      for (let i = 0; c <= 3; i++) {
        c = c * 2;
        c++;
      }
      return { a: a, b: c };
    } else {
      let e = a - 2;
      for (let i = 0; e >= 5; i++) {
        e = e - 2;
      }
      return { a: e, b: b * 2 };
    }
  };

  return (
    <div className="App">
      <h1>TEST NUMBER ONE</h1>

      {/* TEST NUMBER ONE */}

      <div className="test">
        <div className="inputNum">
          <div className="ipt">
            <label htmlFor="numA" className="labelipt">
              A
            </label>
            <input
              type="number"
              name
              numA
              className="anum iptnum"
              onChange={(e) => {
                setANumber(e.target.value);
              }}
            />
          </div>
          <div className="ipt">
            <label htmlFor="numB" className="labelipt">
              B
            </label>
            <input
              type="number"
              className="bnum iptnum"
              onChange={(e) => {
                setBNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="btnresult"
          onClick={() =>
            setNumberOne(result(parseInt(aNumber), parseInt(bNumber)))
          }
        >
          RESULT
        </button>
        <div className="result">A = {numberOne.a}</div>
        <div className="result">B = {numberOne.b}</div>
      </div>

      {/* NUMBER TWO */}

      <h1>TEST NUMBER TWO</h1>
      <div className="test">
        <h2>TABLE</h2>
        <table>
          <tr>
            <td colspan="2">A</td>
            <td colspan="2" rowspan="2">
              B
            </td>
            <td colspan="2" className="middlewords">
              C
            </td>
            <td colspan="2" className="rightwords">
              D
            </td>
            <td colspan="2" rowspan="2">
              E
            </td>
          </tr>
          <tr>
            <td colspan="2" className="rightwords">
              F
            </td>
            <td colspan="2">G</td>
            <td colspan="2" rowspan="2">
              H
            </td>
          </tr>
          <tr>
            <td colspan="4" className="rightwords">
              I
            </td>
            <td colspan="2">J</td>
            <td colspan="2" className="middlewords">
              K
            </td>
          </tr>
        </table>
      </div>

      {/* TEST NUMBER THREE */}

      <div class="test">
        <h1>TEST NUMBER THREE</h1>
        <pre className="codePHP">
          3.a
          <br />
          &lt; ?php <br />
          $arr = array (1, 6, 3, 6, 7, 2, 9, 4, 5)
          <br />
          <br />
          fucntion moveElement(&$arr, $a, $b) &#123; <br />
          $out = array_splice($arr, $a, 1); <br />
          array_splice($array, $b, 0, $out);
          <br /> &#125; <br />
          <br />
          $arrOne = moveElement($arr, 6 , 1) {/* 1,9,3,8,7,2,6,4,5*/}
          <br />
          $arrTwo = moveElement($arrOne, 5, 2) {/* 1,9,2,8,7,3,6,4,5*/}
          <br />
          $arrTrhee = moveElement($arrTwo, 4, 5) {/* 1,9,2,8,3,7,6,4,5*/}
          <br />
          <br />
          $result = moveElement($arrThree, 6, 7) {/* 1,9,2,8,3,7,6,4,5*/}
          <br />
          ?&gt;
        </pre>
        <pre>
          3.b <br />
          <input
            type="number"
            defaultValue="1"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setOne(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="2"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setTwo(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="2"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setThree(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="5"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setFour(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="4"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setFive(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="4"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setSix(parseInt(e.target.value))}
          />
          <input
            type="number"
            defaultValue="1"
            maxLength="1"
            className="inputArray"
            onChange={(e) => setSeven(parseInt(e.target.value))}
          />
          <div class="resultNumber">
            <br/>
            {one}
            {two}
            {three}
            {four}
            {five}
            {six}
            {seven}
            <br/>
            {one}
            {two}
            {three}
            {four}
            {five}
            {six}
            <br/>
            {one}
            {two}
            {three}
            {four}
            {five}
            <br/>
            {one}
            {two}
            {three}
            {four}
            <br/>
            {one}
            {two}
            {three}
            <br/>
            {one}
            {two}
            <br/>
            {one}
          </div>
        </pre>
      </div>
    </div>
  );
}

export default App;
