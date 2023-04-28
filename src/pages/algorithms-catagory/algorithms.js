import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'
import ContentAlgorithmSection from '../../../components/content-algorithm-section/content-algorithm-section'
const inter = Inter({ subsets: ['latin'] })

export default function Algorithms() {
  return (
    <>
        <HeaderForRest />
        <ContentAlgorithmSection />
    </>
  )
}
