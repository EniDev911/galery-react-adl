import Card from "react-bootstrap/Card"; 

const CardComponent = ({ url, title, subtitle, description }) => {
  const urn = "raw.githubusercontent.com/EniDev911/assets/main/svg/software/",
    scheme = "https://",
    uri = scheme+urn+url;

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
    case "discord":
      domain = ".com"
      break
    case "mysql":
      domain = ".com"
      break
    case "audacity":
      domain = ".es"
      break
    default : domain = ".org"
  }

  return (
    <Card className="App-card bg-dark m-auto p-2 h-100">
      <a href={scheme+url+domain} target="_blank" rel="noreferrer noopener">
      <Card.Img variant="top" src={uri.concat(".svg")} className="App-card-img m-auto p-3"/>
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
