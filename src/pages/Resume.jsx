import resumefile from '../assets/nickjeffsresume.pdf'
import Card from 'react-bootstrap/Card';
import JSBadge from '../assets/JSBadge.png';

export default function Resume() {
  return (
    <div className="container pt-4">
      <div className="resumeSection">
        <div className="resumeLinkSection">
          <a href={resumefile} className="resumeLink" download target="blank">Download resume</a>
        </div>

        <div className='skillsSection'>
          <h4>SKILLS:</h4>
            <Card style={{ width: '18rem' }}>
              <Card.Img class="JSCard" variant="top" src={JSBadge} />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </div>
    </div>
  );
}