import { Form, ListGroup } from "react-bootstrap";
import './SearchBox.css'


// This componenet is a generic searchbox that shows results immediatly when the user is typing (like google search)
// Props
// placeholder - string - will be used as the placeholder for the input
// value - string - will be used as the value for the input
// results - array of string - if provided the component will render a floating result box. if not provided
//                              or empty not rendering the result box
// Event Props
// onSearchChanged - event function - will be invoked for each text change
// onResultSelected - event function - will be invoked when the user selects a result (sends the index of the selected result)
function SearchBox(props) {
    const {placeholder, value, onSearchChange, results, onResultSelected} = props;

    // converting data into presentation
    const resultItems = results.map((result, index) => 
        <ListGroup.Item onClick={()=>onResultSelected(index)} action key={index}>{result}</ListGroup.Item>)
    return (
        <div className="c-searchbox">
            <Form.Control type="text" placeholder={placeholder} value={value} onChange={e => onSearchChange(e.target.value)}/> 
            <ListGroup className="results-box">
                {resultItems}
            </ListGroup>       
        </div>
    )
}

export default SearchBox;