import Link from 'next/link'
import React from 'react'
import style from './404.module.css'
import astronaut from '../components/images/astronaut.svg'
import planet from '../components/images/planet.svg'
import Image from 'next/image'

export default function FourOhFour() {
  return(
    <Link href="/">
      <div className={style.container404}>
          <div className={style.permissionDenied}>
              <div className={style.deniedWrapper}>
                  <h1>404</h1>
                  <h3>LOST IN <span>SPACE</span> nombre? Hmm, looks like that page doesn't exist.</h3>
                  <div className={style.imageAstron}>
                    <Image id={style.astronaut} src={astronaut} />
                  </div>
                  <div className={style.imagePlanet}>
                    <Image id={style.planet} src={planet} />
                  </div>
                  <a href="/"><button className={style.deniedLink}>Go Home</button></a>
              </div>
          </div>      
        </div>
      
      </Link>
  )
    
    
  
}