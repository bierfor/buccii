import Image from 'next/image'
import Link from 'next/link'
import {formatgiorno} from '../utils/helpers'

export default function Pub({pub}) {
 
  const{ descrizione,imagen, prezzo, url ,nome, prodotti,publishedAt,id} = pub


    let data = formatgiorno(publishedAt)
    return (
      <div >
        
        <div>
          
          


        </div>
      </div>
  
      
    )
  }
  