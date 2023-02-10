import Head from 'next/head'
import ContactMe from 'src/components/ContactMe/ContactMe'
import Header from 'src/components/Header/Header'
import Hero from 'src/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>João Rodrigues</title>
        <meta name='description' content='My portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <style>
          {`body {
            font-family: 'Roboto', sans-serif;
          }`}
        </style>
      </Head>
      <main>
        <Header />
        <Hero />
        <ContactMe />
      </main>
    </>
  )
}
