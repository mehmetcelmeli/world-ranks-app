import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SearchInput from '@/components/searchInput/SearchInput'
import Layout from '@/components/layout/layout'
import CountriesTable from '@/components/countriestable/CountriesTable'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Home ({countries}) {
  console.log(countries)

  const [keyword,setKeyword] = useState("")

  const filteredCountries = countries.filter((country) => 
  country.name.common.toLowerCase().includes(keyword)) ||
  country.region.toLowerCase().includes(keyword) ||
  country.subregion.toLowerCase().includes(keyword)

  const onInputChangeHandler = (e) => {
e.preventDefault();
setKeyword(e.target.value.toLowerCase())
  }


  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>found {countries.length} countries</div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name"
            onChange={onInputChangeHandler}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export default Home;

export const getStaticProps = async () => {
  const response= await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()
  return {
    props:{
countries,
    }
  }
}