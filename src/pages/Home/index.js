import { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './home.css'
// URL DA API: /movie/now_playing?api_key=88c51cf160111d6b6dad15ef5e196f6c&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: '88c51cf160111d6b6dad15ef5e196f6c', 
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes((response.data.results.slice(0, 10)))
            setLoading(false)
        }
    
        loadFilmes();
    }, [])

    // Se o 'loading' for verdadeiro (true) rederiza o Carregar filmes...
    if(loading) {
        return(
            <div className='loading'>
                <h2>Carregar filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'> 
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img className='filme-imagem' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt='{filme.title}' />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home; 