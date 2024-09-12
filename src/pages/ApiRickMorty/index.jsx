import'./styles.css'
import Card from '../../componets/Card'
import { useEffect, useState } from 'react'

   


export default function ApiRickMorty(){
    const [ conteudo, setConteudo] = useState(<>Carregando</>)
    function getCharacteres() {

        const reqOptions ={

            method:"GET",
            redirect:"follow"
        }
        const response = await fetch(
            "https://rickandmortyapi.com.api/character"
        )

        if(response.ok)
        throw new Error ("HTTP Error")
        return { info: {}, results: mockResults}
    }

    function buildCards(){
        const consulta =getCharacteres()
        
       return consulta.results.map(personagem => <Card data={personagem}/>)

    }

    useEffect(() => {
        function getConteudo(){
          setConteudo(await buildCards())
        }

        getConteudo()
    }, [])

    return(<div className='list-api'>
        {conteudo}

    </div>)
}