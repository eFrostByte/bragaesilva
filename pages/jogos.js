import Head from 'next/head';
import Link from 'next/link';
import DefaultHeader from './myfunc.js';
import ListItem from './list-item.js';
function Jogos(){
	
	return(
		<div id="jogos-wd"> 
			<Head>
				<title>Braga e Silva</title>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<DefaultHeader />
			<div className="main" id="jogos">
				<h2>Jogos</h2>
				<p>Veja alguns dos</p>
				<p>meus jogos abaixo</p>
                <div className="content">
                    <div className="liw"> 

                        <ListItem title="Asteroids" href="https://asteroidsv5.vercel.app" img="/images/asteroids.png" alt="asteroids">
                            Reimaginação do clássico jogo Asteroids
                        </ListItem>

                        <ListItem title="Enigma" href="https://enigma.efrostbyte.repl.co" img="/images/tela2.jpg" alt="enigma">
                            Jogo de enigma para testar suas habilidades
                        </ListItem>

                    </div>
                </div>
			</div>
		</div>
	)
}

export default Jogos