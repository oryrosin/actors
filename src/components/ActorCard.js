import "./ActorCard.css";
import { Container, Row,  } from 'react-bootstrap';
import Card from '@material-ui/core/Card';

function ActorCard(props){
    const {actor}= props;
    
    return (
    <Container>
        <Row>
            <Card>
                <img className="card-img-top" src={actor.image} alt="Card " onClick={()=>window.open(actor.aLink) }/>
                <div className="card-body">
                    <h4 className="card-title" style={{color:"black"}}>{actor.fName +" "+ actor.lName}</h4>
                    <p className="card-text" style={{color:"black"}}>{actor.age()}</p>
                </div>
            </Card>
        </Row> 
    </Container>
        
      );
}
export default ActorCard