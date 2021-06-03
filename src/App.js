import logo from "./logo.svg";
import "./App.css";

function App() {
  makeRowsLightGray()
  return (
    <div className="App">
      <div>-------------</div>
      <div>
        <div className="row-1" style={{height: '200px'}}>
          <span>Display INNERHTML inside a div with class that contains 'second-element'. 1. Must start with document.getElementsByClassName("element") to get all elements</span>
          <div>{rowOneText()}</div>
        </div>
        <div className="row-2" style={{height: '200px'}}>
          <span>Display value of the input element. 1. Must use document.getElementsByClassName("ele-field") to get all elements, 2. filter through tagName of each element AND filter through className to make sure it has dog in it</span>
          <div>{rowTwoText()}</div>
        </div>
        <div className="row-3" style={{height: '200px'}}>
          <span>Display tag names of all previousElementSiblings with class = 'element'. 1. Must use document.getElementsByClassName("element") to get all elements</span>
          <div>{displayTagNames()}</div>
        </div>
        <div className="row-4" style={{height: '200px'}}>
          <span>1. Get all elements with className ele-field in it... 2. loop through to and if previousSibling contains 'field' regardless of capital letters, add the 'ele-field' element to the array (array.push()) 3. console.log it</span>
          <div>{displayConsolelog()}</div>
        </div>
        <div className="row-5" style={{height: '200px'}}>
          <span></span>
          <div></div>
        </div>
      </div>
      <div>-------------</div>
    </div>
  );
}

export default App;
/**
 * Display INNERHTML inside a div with class that contains 'second-element'. 
 * 1. Must start with document.getElementsByClassName("element") to get all elements
 * @returns 
 */
const rowOneText = () => {
  // must use code logic, no hard code
  return ""
}

/**
 * Display value of the input element. 
 * 1. Must use document.getElementsByClassName("ele-field") to get all elements, 
 * 2. filter through tagName of each element AND filter through className to make sure it has dog in it 
 * @returns 
 */
const rowTwoText = () => {
  // must use code logic, no hard coding
  return ""
}

/**
 * Display tag names of all previousElementSiblings with class = 'element'. 1. Must use document.getElementsByClassName("element") to get all elements
 * @returns 
 */
const displayTagNames = () => {
  // must use code logic, no hard coding
  return ""
}

/**
 * 1. Get all elements with className ele-field in it... 
 * 2. loop through to and if previousSibling contains 'field' regardless of capital letters, add the 'ele-field' element to the array (array.push()) 
 * 3. console.log it
 * 
 */
const displayConsolelog = () => {
  let matchedPreviousSiblings = []
  // you can use matchedPreviousSiblings.push() -> google array.push
  console.log("matched previous siblings with 'field' regardless of capital letters or not")
}

/**
 * 1. add a change listener to the select dropdown
 * 2. when select dropdown is selected, find elements with that className Value
 *        - example: selected: row-1
 *            -> find elements that has 'row-1' className, and set style.backgroundColor to lightgray
 *            -> google HTML dom style if you need to
 */
const makeRowsLightGray = () => {

}