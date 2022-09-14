import React from "react";
import { Form } from "react-bootstrap";

class FormSort extends React.Component{





    render(){
        return(
            <Form onChange={this.props.chosenNumber} >
                <Form.Label>Sort</Form.Label>
                <Form.Select>
                    <option value= {0}>default</option>
                    <option value= {1} >sort by price</option>
                    <option value= {2} >sort by rooms number</option>
                    <option value= {3} >sort by houme size</option>
                </Form.Select>
            </Form>
            
        )
    }

}

export default FormSort;