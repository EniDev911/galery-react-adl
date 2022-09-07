import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Software Gallery" />
      <div className="App-gallery">
        <Card
          url="keepassxc"
          title="🔑 Keepass XC"
          subtitle="Admin de contraseñas"
          description="Cross-platform + OpenSource"
        />
        <Card
          url="audacity"
          title="🎧 Audacity"
          subtitle="Audio editor"
          description="Waveform sound editor"
        />
        <Card
          url="discord"
          title="🎮 Discord"
          subtitle="Aplicación de chat"
          description="TeamSpeak + Gaming + OpenSource"
        />

        <Card
          url="inkscape"
          title="🗻 Inkscape"
          subtitle="Editor gráfico vectorial"
          description="Orientado a vectorial y SVG"
        />
        <Card
          url="aseprite"
          title="👾 Aseprite"
          subtitle="Editor gráfico"
          description="Orientado a Pixel Art."
        />
      </div>
      {/* Programming software */}
      <Header title="Programming Software" />
      <div className="App-gallery">
        <Card
          url="code.visualstudio"
          title="✏️ Visual Studio Code"
          subtitle="Editor de código"
          description="WSL Remote + Others"
        />
        <Card
          url="sublimetext"
          title="✏️ Sublime Text"
          subtitle="Editor de código"
          description="Cross-platform + Lightweight"
        />
        <Card
          url="vitejs"
          title="📦 ViteJS"
          subtitle="Empaquetador Javascript"
          description="CLI rápido, ESM compatibles"
        />
        <Card
          url="nodejs"
          title="🚀 Nodejs"
          subtitle="Javascript runtime"
          description="Open-source, cross-platform, back-end"
        />
        <Card
          url="git-scm"
          title="🗂️ Git"
          subtitle="Control de versiones"
          description="Distributed Architecture + OpenSource"
        />
        <Card
          url="python"
          title="🐍 Python"
          subtitle="Intérprete de python"
          description="General-purpose + OpenSource"
        />
        <Card
          url="spyder-ide"
          title="🕸️ Spyder"
          subtitle="IDE de python"
          description="Scientific Environment + OpenSource"
        />
        <Card
          url="mysql"
          title="🐬 MySQL"
          subtitle="RDBMS Oracle-backend"
          description="Relational database management system"
        />
        <Card
          url="mariadb"
          title="🦭 MariaDB"
          subtitle="RDBMS open source"
          description="Relational database management system"
        />
        <Card
          url="postgresql"
          title="🐘 PostgreSQL"
          subtitle="ORDBMS"
          description="Object oriented database model + OpenSource"
        />
        <Card
          url="mongodb"
          title="🍃 MongoDB"
          subtitle="Classified NoSQL"
          description="Document-oriented database + cross-platform"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
