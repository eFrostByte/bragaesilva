import Head from 'next/head';
import {DefaultHeader} from '../components/braga.js';
function Home() {

    return (
        <div id="hf-wd">
            <Head>
                <title>Braga e Silva</title>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <DefaultHeader />

            <div className="main">
                <h2>Bem vindo!</h2>
                <p>Este é o meu site.</p>
                <p>Você pode encontrar coisas</p>
                <p> interessantes para fazer </p>
                <p>no cabeçalho.</p>
                
            </div>
        </div>
    )
}
export default Home