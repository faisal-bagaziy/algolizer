import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../../styles/Home.module.css'
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'
import ContentAlgorithmSection from '../../../components/content-algorithm-section/content-algorithm-section'
const inter = Inter({ subsets: ['latin'] })

export default function Algorithms() {
  return (
    <>
      <Head>
        <title>Algolizer | Algorithms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HeroPic.svg" />
      </Head>
        <HeaderForRest />
        <ContentAlgorithmSection />
    </>
  )
}
