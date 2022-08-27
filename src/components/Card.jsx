import Card from "react-bootstrap/Card"; 

const CardComponent = ({ url, title, subtitle, description }) => {
  let domain = ".org"
  switch (url){
    case "vitejs":
      domain = ".dev"
      break
    case "code.visualstudio":
      domain = ".com"
      break
    case "git-scm":
      domain = ".com"
      break
    case "audacity":
      domain = ".es"
      break
  }

  return (
    <Card className="App-card bg-dark m-auto">
      <a href={"https://"+url+domain} target="_blank">
      <Card.Img variant="top" src={url.concat('.svg')} className="App-card-img w-75 h-50 m-auto p-3"/>
      </a>
      <Card.Body className="text-light text-uppercase">
       <Card.Title>{title}</Card.Title> 
       <Card.Subtitle className="text-warning">{subtitle}</Card.Subtitle>
      </Card.Body>
      <Card.Text className="text-secondary fst-italic">{description}</Card.Text>
    </Card>
  );
};

export default CardComponent;
